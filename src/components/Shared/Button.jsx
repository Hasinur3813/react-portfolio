const Button = ({ type, onClick, className, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} bg-primaryColor text-white px-4 py-2 rounded-lg hover:!bg-secondaryColor transition`}
    >
      {children}
    </button>
  );
};

export default Button;
