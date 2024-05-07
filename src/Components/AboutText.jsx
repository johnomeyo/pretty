import "./About.css";

export const AboutText = (props) => {
  return (
    <div className="about-text-container">
      <p>{props.text}</p>
    </div>
  );
};
