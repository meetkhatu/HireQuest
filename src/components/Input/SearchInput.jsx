import React from "react";
import { FiSearch, FiMapPin } from "react-icons/fi";

const SearchInput = ({ jobValue, locValue, onLocChange, onJobChange, onSubmit, type = "text" }) => {
  return (
    <form
  onSubmit={onSubmit}
  className="flex w-full max-w-3xl mx-auto rounded-full overflow-hidden border bg-white shadow-md"
>
  <div className="flex items-center px-4 py-2 flex-[2_2_0%] border-r border-gray-200">
    <FiSearch className="text-gray-500 mr-2" />
    <input
      type={type}
      value={jobValue}
      onChange={onJobChange}
      placeholder="Find your perfect job"
      className="w-full bg-transparent text-md text-gray-700 placeholder-gray-500 focus:outline-none"
    />
  </div>

  <div className="flex items-center px-4 py-2 flex-[2_2_0%] border-r border-gray-200">
    <FiMapPin className="text-gray-500 mr-2" />
    <input
      type={type}
      value={locValue}
      onChange={onLocChange}
      placeholder="Location"
      className="w-full bg-transparent text-md text-gray-700 placeholder-gray-500 focus:outline-none"
    />
  </div>

  <button
    type="submit"
    className="flex-[1_1_0%] bg-blue-500 text-white text-md font-medium px-4 py-2 hover:bg-blue-600 transition-all"
  >
    Search
  </button>
</form>

  );
};

export default SearchInput;
