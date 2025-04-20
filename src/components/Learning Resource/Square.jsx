import React from "react";

export default function Square({ item, handleSelectedItem }) {
  return (
    <button
      onClick={() => item.name == "Udemy" && handleSelectedItem(item)}
      className={`bg-white max-sm:size-28 size-48 p-5 rounded-md  transition-[transform: scale] duration-150 ${
        item.name == "Udemy" && "hover:scale-95"
      }`}
    >
      <img
        src={item.image}
        alt={item.name}
        draggable={false}
        className="select-none"
      />
    </button>
  );
}
