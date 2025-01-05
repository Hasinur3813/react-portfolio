import { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";

const ActionButtons = () => {
  const [showColors, setShowColors] = useState(false);

  const handleShowColor = () => {
    // todo
    setShowColors(!showColors);
  };

  return (
    <div className="fixed bottom-5 right-5">
      <div
        className={`${
          showColors && "opacity-100 z-auto pointer-events-auto"
        } opacity-0 -z-10 pointer-events-none w-10 h-32 bg-black rounded-md absolute -top-36 right-0`}
      ></div>

      <div className="space-y-2">
        {/* themes control */}
        <div>
          <button
            onClick={handleShowColor}
            type="button"
            className="hover:rotate-180 transition-transform duration-100"
          >
            <IoSettingsSharp className="text-3xl lg:text-4xl text-primaryColor" />
          </button>
        </div>

        {/* contact through whatsapp */}
        <div>
          <button type="button" className="">
            <IoLogoWhatsapp className="text-3xl lg:text-4xl text-[#51c857]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;
