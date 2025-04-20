import React from "react";

export default function Email({
  email,
  handleShowToolTip,
  buttonAndLinkClass,
}) {
  return (
    email && (
      <button onClick={handleShowToolTip} className={`${buttonAndLinkClass}`}>
        Copy Email
      </button>
    )
  );
}
