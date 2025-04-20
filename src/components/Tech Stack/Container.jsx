import React from "react";

export default function Container({ children }) {
  return (
    <div className="flex overflow-x-auto overflow-y-hidden w-[100%] gap-3 mx-auto justify-around mt-5">
      {children}
    </div>
  );
}
