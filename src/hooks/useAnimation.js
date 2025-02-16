const useAnimation = () => {
  return {
    fadeUp: {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      },
    },
    fadeDown: {
      hidden: { opacity: 0, y: -30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      },
    },
    slideFromLeft: {
      hidden: { x: -100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    },
    slideFromRight: {
      hidden: { x: 100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    },
    zoomIn: {
      hidden: { scale: 0, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
      },
      exit: {
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3 },
      },
    },
    zoomOut: {
      hidden: { scale: 1.5, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
      },
      exit: {
        scale: 1.5,
        opacity: 0,
        transition: { duration: 0.3 },
      },
    },
  };
};

export default useAnimation;
