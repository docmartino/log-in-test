import { useAuth0 } from "@auth0/auth0-react";
import "./wall.css";

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
    e.preventDefault();
    const date = new Date();

    let post = {
      id: user.sub,
      user_name: e.target.user_name.value,
      message: e.target.message.value,
      date: date,
    };

    console.log(post);
  };

  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) return <div>Please log in</div>;
  if (isAuthenticated) {
    return (
      <div className="wall">
        <h2>Welcome To Wall</h2>
        <button onClick={FormPost}> New Post </button>
        <div id="postForm">
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
                <input
                  type="submit"
                  value="Post"
                  className="contactBTN"
                  onChange={() => {}}
                />
              </form>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <h2>TESTING</h2>
        </div>
      </div>
    );
  }
};

export default Wall;
