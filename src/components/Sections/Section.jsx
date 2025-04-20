import React from "react";

export default function Section({ children, id }) {
  let extraStyle = "";

  if (id == "profile") {
    extraStyle = "justify-between gap-4";
  }
  return (
    <section
      id={id}
      className={`relative bg-black w-full min-h-[10rem] rounded flex flex-col scroll-mt-3 ${
        id !== "my-learning-resource" && "p-10 max-sm:p-2"
      } ${extraStyle}`}
    >
      {children}
    </section>
  );
}
