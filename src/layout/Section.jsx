const Section = ({ children, className }) => {
  return (
    <section className={`${className && className} py-5`}>{children}</section>
  );
};

export default Section;
