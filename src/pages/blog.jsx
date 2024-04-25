import "../Components/Blog.css";
import { BlogCard } from "../Components/Blog-card";
export const Blog = () => {
  return (
    <>
      <h2>Our Blogs</h2>
      <div className="blog-container">
        <div className="blog">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </>
  );
};
