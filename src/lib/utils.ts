export const modalPopup = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500
    }
  },
  exit: {
    opacity: 0
  }
};
