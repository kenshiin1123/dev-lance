import { motion } from "framer-motion";
import React from "react";
import "./Navigation.css";
import Lists from "./Lists";

export default function NavigationBar() {
  return (
    <motion.nav className="max-sm:hidden top-1 fixed z-10 right-0 left-0 w-full h-12 flex text-white">
      <ul className="flex items-center justify-center mx-auto gap-5 px-3 rounded-lg overflow-x-scroll bg-black">
        <Lists />
      </ul>
    </motion.nav>
  );
}
