const Section = ({ children, className }) => {
  return (
    <section className={`${className && className} py-16`}>{children}</section>
  );
};

export default Section;
