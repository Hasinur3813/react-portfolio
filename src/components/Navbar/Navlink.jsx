import { NavLink } from "react-router-dom";
const MenuLink = ({ path, text }) => {
  return (
    <li className="relative">
      <NavLink
        to={`${path}`}
        className="hover:text-secondaryColor transition-color duration-200 before:content-[''] before:absolute before:-bottom-1 before:rounded-sm before:left-1/2 before:right:1/2 hover:before:left-0 hover:before:right-0 before:w-0 before:hover:w-full before:text-center before:h-1 before:transition-all before:duration-200 before:bg-primaryColor"
      >
        {text}
      </NavLink>
    </li>
  );
};

export default MenuLink;
