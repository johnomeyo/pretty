import "../Components/About.css";
import { AboutText } from "../Components/AboutText";

export const About = () => {
  return (
    <>
      <div className="about-intro">
        <AboutText text="At Pretty, passionate photographers share free, high-resolution images, igniting creativity for everyone. Explore our vast library and join the inspiring community" />
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
              "We believe that beautiful images shouldn't be a privilege reserved for a select few. That's why we connect a passionate global community of photographers who generously share their work, fostering a space for creativity and inspiration."
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
        <AboutText text="Unleash your creative potential with Pretty's free, stunning, and royalty-free stock photos. Download millions of high-resolution images for any project, absolutely free." />
      </div>
    </>
  );
};
