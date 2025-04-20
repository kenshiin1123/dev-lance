import { useState } from "react";

function copyToClipboard(email) {
  navigator.clipboard
    .writeText(email)
    .then(() => {})
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}

const useContacts = (email) => {
  const [showToolTip, setShowToolTip] = useState(false);

  const handleShowToolTip = () => {
    copyToClipboard(email);
    setShowToolTip((prevShowToolTip) => !prevShowToolTip);
    setTimeout(() => {
      setShowToolTip((prevShowToolTip) => !prevShowToolTip);
    }, 1000);
  };

  return { showToolTip, handleShowToolTip };
};

export default useContacts;
