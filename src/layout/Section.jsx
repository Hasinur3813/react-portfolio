const Section = ({ children, className }) => {
  return (
    <section className={`${className && className} py-20`}>{children}</section>
  );
};

export default Section;
