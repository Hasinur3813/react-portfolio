import { useEffect, useRef, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import Themes from "./Themes";

const ActionButtons = () => {
  const [showColors, setShowColors] = useState(false);

  const themeBox = useRef(null);

  const handleShowColor = () => {
    console.log("before clicked");
    console.log(showColors);
    setShowColors((prevState) => !prevState);
    console.log(" after clicked");
  };

  // Close menu when clicking outside the themeBox
  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log(themeBox.current);
      if (themeBox.current && !themeBox.current.contains(event.target)) {
        console.log("useEffect run");
        setShowColors(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-[999]">
      {/* Menu */}

      <div
        ref={themeBox}
        className={`${
          showColors && "opacity-100 z-auto pointer-events-auto"
        } opacity-0 -z-10 pointer-events-none rounded-md bg-offWhite border px-6 py-4 absolute -top-72 right-0`}
      >
        <Themes />
      </div>

      <div className="space-y-2">
        {/* Themes Control */}
        <div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleShowColor();
            }}
            type="button"
            className="hover:rotate-180 md:block hidden transition-transform duration-100"
          >
            <IoSettingsSharp className="text-5xl lg:text-4xl text-primaryColor" />
          </button>
        </div>

        {/* Contact through WhatsApp */}
        <div>
          <button type="button" className="">
            <IoLogoWhatsapp className="text-5xl lg:text-4xl text-[#51c857]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;
