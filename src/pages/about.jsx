import "../Components/About.css";
import { AboutText } from "../Components/AboutText";

export const About = () => {
  return (
    <>
      <div className="about-intro">
        <AboutText />
        <img
          loading="lazy"
          src="https://images.unsplash.com/photo-1637946175559-22c4fe13fc54?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="black and white shapes"
        />
      </div>
      <div className="about-us-trio">
        <div className="abt-text">
          <h3>{"About Us"}</h3>
        </div>
        <div className="abt-info">
          <p>
            {
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Namvoluptatem praesentium perferendis obcaecati nihil! Magni voluptatefugit, necessitatibus maxime natus quam quaerat adipisci eveniet quiadicta consectetur architecto tenetur dolore."
            }
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1577703691096-6de1c5c3fa85?q=80&w=1602&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="about-intro">
        <img
          loading="lazy"
          src="https://images.unsplash.com/photo-1714602679012-9d34aca206ce?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="photo of a library"
        />
        <AboutText />
      </div>
    </>
  );
};
