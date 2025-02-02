const PageHeader = ({ title, heading }) => {
  return (
    <div className="py-20 px-4 bg-gradient-to-tr from-primaryColor to-secondaryColor text-center">
      <h2 className="font-semibold text-base md:text-xl mb-2 text-lightGray">
        {heading}
      </h2>
      <p className="tracking-wider font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-lightGray">
        {title}
      </p>
    </div>
  );
};

export default PageHeader;
