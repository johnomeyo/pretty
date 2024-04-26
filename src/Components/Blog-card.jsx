import "../Components/Blog.css";
import { PropTypes } from "prop-types"
export const BlogCard = (props) => {
  const title = props.title;
  const text = props.text;
  return (
    <div className="blog-card">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};
BlogCard.defaultProps = {
    title: "Photography and videography",
    text: "Creating a lasting visual impression on a potential customer usually happens with an image first. Be it still photography or videography,motion graphics or compeling combination of all the above",
  };
BlogCard.propTypes={
    title: PropTypes.string,
    text: PropTypes.string
}
