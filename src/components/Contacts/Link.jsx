import React from "react";

export default function Link({ link, buttonAndLinkClass }) {
  return (
    link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonAndLinkClass}
      >
        View Profile
      </a>
    )
  );
}
