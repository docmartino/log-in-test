import { useAuth0 } from "@auth0/auth0-react";
import "../../style/wall.css";
import axios from "../../api/axios";
import { ReactComponent as Trash } from "../../assets/icons/trash.svg";

const Wall = () => {
  const { user } = useAuth0();

  const FormPost = () => {
    console.log("clicked form button");
    let test = document.getElementById("postForm");
    if (test.style.display === "none") {
      test.style.display = "block";
    } else {
      test.style.display = "none";
    }
  };

  const SendPost = (e) => {
    // let user_name = " ";
    // let message = " ";
    let informationArea = document.getElementById("testingArea");

    e.preventDefault();
    const date = new Date();

    let postForDb = {
      id_auth0: user.sub,
      user_name: e.target.user_name.value,
      message: e.target.message.value,
      date: date,
    };

    let post = {
      // id: user.sub,
      user_name: e.target.user_name.value,
      message: e.target.message.value,
      // date: date,
    };

    axios
      .post("/posts", postForDb)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // informationArea.innerText += "------------------------------------" + "\n";

    // for (var [label, infos] of Object.entries(post)) {
    //   console.log(label + ": " + infos);
    //   informationArea.innerText += label + ": " + infos + "\n";
    // }

    postButton();
    setTimeout(() => {
      getPosts();
    }, 500);
  };

  const postButton = () => {
    let test = document.getElementById("postForm");
    test.style.display = "none";
  };

  const getPosts = () => {

    axios
      .get("/posts")
      .then((res) => {
        console.log(res.data);
        res.data.map((posts) => {
          let informationArea = document.getElementById("testingArea");  

          let div = informationArea.appendChild(document.createElement("div"));
          div.innerText = " ";
          div.innerText +=
            "name: " +
            posts.user_name +
            " message: " +
            posts.message +
            "\n" +
            "\n";

          let button = div.appendChild(document.createElement("button"));
          button.innerHTML = "Delete";
          button.style.padding = "3px";
          button.style.margin = "3px";

          let p = div.appendChild(document.createElement("p"));
          p.innerHTML += "\n" + "------------------------------------" + "\n";
        });
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response);
        } else {
          console.log(`Error: ${err.message}`);
        }
      });
  };

  getPosts();

  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) return <div>Please log in</div>;

  if (isAuthenticated) {
    return (
      <div className="wall">
        <div className="wall-header">
          <h2>Welcome To Wall</h2>
          <button onClick={FormPost}> New Post </button>
        </div>
        <div id="postForm" style={{ display: "none" }}>
          <div className="contactContainer">
            <div className="contactForm">
              <form onSubmit={SendPost} className="contact">
                <label>My name</label>
                <input
                  type="text"
                  name="user_name"
                  value={user.name}
                  onChange={() => {}}
                />
                <label>Message</label>
                <textarea name="message" />
                <button
                  type="submit"
                  value="Post"
                  className="contactBTN"
                  onChange={() => {}}
                >
                  Post
                </button>
              </form>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <h2 style={{ textAlign: "center" }}>TESTING</h2>
          <div id="testingArea"></div>
        </div>
      </div>
    );
  }
};

export default Wall;
