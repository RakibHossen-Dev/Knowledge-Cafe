import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookMarks, readingTime }) => {
  return (
    <div className="md:w-1/3">
      <div className="bg-purple-100 border border-purple-800 p-3 mb-4 rounded-md">
        <h3 className="text-center text-purple-600">
          Spent time on read : {readingTime} min
        </h3>
      </div>
      <div className=" bg-gray-200 p-4 rounded-md">
        <h1 className="text-2xl text-center">
          Bookmarked Blogs : {bookMarks.length}
        </h1>
        {bookMarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookMarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;
