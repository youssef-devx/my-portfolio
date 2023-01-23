import Logo from "@/icons/Logo";
import { motion } from "framer-motion";
import React from "react";

export default function Preloader({ show }) {
  return (
    <motion.div className={`preloader ${show ? "show" : "hidden"}`}>
      <Logo dark={true} />
    </motion.div>
  );
}
