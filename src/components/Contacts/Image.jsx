import React from "react";

export default function Image({ name, image }) {
  return <img src={image} alt={`${name}-image`} className="size-5" />;
}
