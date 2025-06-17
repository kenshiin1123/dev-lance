import React from "react";

export default function Square({ name, image, link }) {
  return (
    <div className="size-80 bg-black p-5 flex flex-col justify-center items-center border border-white gap-3 min-sm:size-[40vw] min-md:size-[28vw]">
      <img
        onClick={() => {
          window.location.href = link;
        }}
        src={image}
        alt={`${name}-image`}
        className="aspect-square w-[90%] rounded-lg active:scale-95 transition hover:-translate-y-1 hover:shadow-md hover:shadow-blue-600/30"
      />
      <a
        className="text-xl text-white select-none hover:underline"
        style={{ fontFamily: "Kadwa" }}
        href={link}
        rel="noopener noreferrer"
      >
        {name}
      </a>
    </div>
  );
}
