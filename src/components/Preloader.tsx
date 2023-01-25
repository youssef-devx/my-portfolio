import Logo from "@/icons/Logo";
import { motion } from "framer-motion";

export default function Preloader({ show } : { show: boolean }) {
  return (
    <motion.div className={`preloader ${show ? "show" : "hidden"}`}>
      <Logo dark={true} />
    </motion.div>
  );
}
