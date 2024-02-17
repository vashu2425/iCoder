import BlogCards from "./BlogCards";
import Paginations from "./Paginations";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [blog, setBlog] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [selectedCatogery, setSelectedCatogery] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  useEffect(() => {
    async function fetchBlog() {
      let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;
      if (selectedCatogery) {
        url += `&catogery=${selectedCatogery}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setBlog(data);
    }
    fetchBlog();
  }, [currentPage, pageSize, selectedCatogery]);
  console.log(blog);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCatogery(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  return (
    <div>
      <div>Page Catogery</div>
      <div>
        <BlogCards
          blog={blog}
          currentPage={currentPage}
          selectedCatogery={selectedCatogery}
          pageSize={pageSize}
        />
      </div>
      <div>
        <Paginations
          onPageChange={handlePageChange}
          currentPage={currentPage}
          blog={blog}
        />
      </div>
    </div>
  );
};
export default Blogs;
