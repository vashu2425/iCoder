import React from "react";
import Header from "../Components/Header";
import Search from "../Components/Search";

import Blogs from "../Components/Blogs";
import Footers from "../Components/Footers";
const Home = () => {
  return (
    <div>
      <Header />
      <Search />
      <Blogs />
      <Footers />
    </div>
  );
};
export default Home;
