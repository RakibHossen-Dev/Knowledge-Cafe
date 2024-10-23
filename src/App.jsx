import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setreadingTime] = useState(0);
  const handleBookMark = (blog) => {
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
  };

  const handleMarkAsRead = (id, time) => {
    setreadingTime(readingTime + time);
    const remauningBookmark = bookMarks.filter(
      (bookMark) => bookMark.id !== id
    );
    setBookMarks(remauningBookmark);
  };

  return (
    <>
      <Header></Header>
      <div className="w-11/12 mx-auto md:flex justify-between gap-6">
        <Blogs
          handleMarkAsRead={handleMarkAsRead}
          handleBookMark={handleBookMark}
        ></Blogs>
        <Bookmarks readingTime={readingTime} bookMarks={bookMarks}></Bookmarks>
      </div>
      <footer className="bg-slate-100 mt-10 py-6">
        <p className="text-center text-sm">
          All right reserved by Rakib Hossen
        </p>
      </footer>
    </>
  );
}

export default App;
