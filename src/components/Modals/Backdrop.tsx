"use client";

import { motion } from "framer-motion";

interface IBackdrop {
  children: React.ReactNode;
  onClick: () => void;
}

const Backdrop = ({ children, onClick }: IBackdrop) => {
  return (
    <motion.div
      onClick={onClick}
      className="fixed inset-0 z-50 bg-black bg-opacity-40 w-full h-full flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
