import React from "react";

const Search = ({ value, onChange, onSearch }) => {
  return (
    <div className="flex items-center">
      <input
        className="border border-[#e46e4a] h-[30px] w-[240px] rounded-[10px] px-[10px] mr-5 text-[#e46e4a] text-[16px] placeholder:text-[#e46e4a]/60 focus:outline-none focus:border-[#f74008]"
        type="text"
        placeholder="Search restaurants"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <button
        className="bg-[#e46e4a] border-none h-[32px] px-5 rounded-[10px] text-white text-[16px] hover:cursor-pointer hover:bg-[#e46e4a]/60"
        onClick={onSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
