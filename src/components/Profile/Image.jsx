import React from "react";
import profilePic from "../../assets/images/Profile/profile-image.jpg";
import { motion } from "framer-motion";
export default function Image() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.55 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="select-none max-sm:size-[40vw] min-sm:size-96 min-lg:size-96 bg-white overflow-hidden rounded-full flex justify-center items-center mx-auto"
    >
      <img
        src={profilePic}
        alt="profile-pic"
        draggable="false"
        className="select-none"
      />
    </motion.div>
  );
}
