import React from "react";

export default function Image({ image, index }) {
  return (
    <img
      src={image}
      alt={index}
      className="select-none max-sm:w-38 min-sm:w-56 min-md:w-78 rounded-lg bg-white"
      draggable={false}
    />
  );
}
