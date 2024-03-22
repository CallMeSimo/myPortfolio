import React from "react";

export const ProjectTags = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-purple-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      className={`${buttonStyles} rounded-full bg-[#121212]  border-2 border-purple-500 px-6 py-4 text-xl  cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};
