const useScrollToSection = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return scrollTo;
};

export default useScrollToSection;
