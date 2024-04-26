import "../Components/Blog.css";
import { BlogCard } from "../Components/Blog-card";
export const Blog = () => {
  return (
    <>
      <h2>Our Blogs</h2>
      <div className="blog-container">
        <div className="blog">
          <BlogCard
            title="Travel Photography"
            text="Share your experience trekking through the Himalayas. Describe the breathtaking landscapes, unique cultures, and local people you encountered. Include stunning photos of mountain peaks, serene valleys, ancient monasteries, and vibrant villages."
          />
          <BlogCard
            title="Wildlife Photography"
            text="Deep within the Amazon rainforest, I ventured into a hidden world teeming with life. From brightly colored birds flitting through the canopy to elusive jaguars stalking their prey, my camera captured the vibrant tapestry of this irreplaceable ecosystem."
          />
          <BlogCard
            title="Street Photography"
            text="The city streets pulsate with energy, a constant flow of humanity on display. From street vendors hawking their wares to musicians captivating audiences, my lens captures the raw emotions and everyday stories that unfold on these concrete stages."
          />
          <BlogCard
            title="Food Photography"
            text="A whirlwind tour of the bustling markets in Marrakesh awakened my senses with an explosion of vibrant spices. From fragrant tagines to delicate pastries, I documented the culinary artistry and rich flavors that define Moroccan cuisine."
          />
          <BlogCard
            title="Landscape Photography"
            text="Bathed in the golden light of dawn, the vast expanse of the Namib Desert stretches into infinity. My camera captured the stark beauty of this ancient landscape, its towering sand dunes sculpted by wind and time."
          />
          <BlogCard
            title="Portrait Photography"
            text="Through the expressive eyes of a weathered farmer, I glimpsed a lifetime of stories etched on his face. In this series, I explore the power of portraits to reveal the unique personalities and experiences of the people behind the lens."
          />
        </div>
      </div>
    </>
  );
};
