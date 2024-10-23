import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookMark, handleMarkAsRead }) => {
  const {
    id,
    cover_pic,
    title,
    author_image,
    author,
    post_date,
    hashtags,
    reading_time,
  } = blog;
  return (
    <div className=" space-y-3 mb-10">
      <img
        className="rounded-md md:h-[450px]  w-full"
        src={cover_pic}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between items-center">
        <div className="flex justify-center gap-2">
          <img className="w-12 rounded-full" src={author_image} alt="" />
          <div>
            <h3 className="text-xl font-bold">{author}</h3>
            <p>{post_date}</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <p>{reading_time} Min read</p>
          <button onClick={() => handleBookMark(blog)}>
            <FaRegBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx} className="m-1">
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(id, reading_time)}
        className="text-purple-600 underline font-bold"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookMark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};
export default Blog;
