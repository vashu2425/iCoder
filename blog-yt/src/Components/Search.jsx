import { useState } from "react";
import banner from "./../assets/Images/banner2.png";
import { IoSearchSharp } from "react-icons/io5";
const Search = () => {
  const tags = [
    { id: 1, name: "All" },
    { id: 2, name: "React" },
    {
      id: 3,
      name: "React native",
    },
    { id: 4, name: "Angular" },
    { id: 5, name: "UI/UX2" },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex justify-center mt-8 flex-col px-[70] md:px-[150px]">
      <img src={banner} className="rounded-2xl " />
      <div className="bg-white shadow-lg p-3 rounded-lg  mt-[-2px] mx-[25%] flex items-center">
        <IoSearchSharp className="text-[20px] text-grey-400" />

        <input type="text" placeholder="Search" className="outline-none ml-2" />
      </div>
      <div className="flex gap-10 justify-center mt-5">
        {tags.map((item, index) => (
          <ul
            key={item.id}
            onClick={() => setActiveIndex(index)}
            className={`p-1 pb-2 rounded-full md:rounded-full cursor-pointer md:px-4 hover:scale-110 hover:border-[1px] border-blue-900 transition-all duration-100 ease-in-out ${
              index === activeIndex ? "bg-blue-900 text-white" : ""
            }`}
          >
            <li>{item.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};
export default Search;
