import React from "react";
import Icon from "./Icon";
import {
  FaWifi,
  FaCode,
  FaSpeakap,
  FaBluetooth,
  FaLightbulb,
  FaPodcast,
  FaPlus,
  FaMinus,
  FaSignal,
  FaUserCircle,
  FaSearch,
} from "react-icons/fa";

const NotificationContainer = () => {
  const icons = [
    <FaWifi className="h-7 w-7" />,
    <FaCode className="h-7 w-7" />,
    <FaSpeakap className="h-7 w-7" />,
    <FaBluetooth className="h-7 w-7" />,
    <FaLightbulb className="h-7 w-7" />,
    <FaPodcast className="h-7 w-7" />,
  ];
  return (
    <div className="w-100 h-64 bg-primary rounded-2xl px-6 py-4 flex flex-col">
      <div className="h-7 flex justify-between items-center">
        {/* date and time */}
        <div>
          <p className="text-white font-semibold">
            09:00 <span className="font-light">Tue,Aug 7</span>
          </p>
        </div>
        {/* phone status */}
        <div className="flex space-x-2 items-center">
          <FaSignal className="text-background h-4 w-4" />
          <FaUserCircle className="text-background h-4 w-4" />
          <FaUserCircle className="text-background h-4 w-4" />
          <p className="text-white font-light">100%</p>
        </div>
      </div>
      <div className="w-full h-20 my-4 flex items-center justify-between">
        {/* <Icon icon={<FaWifi className='h-7 w-7'/>}/> */}
        {icons.map((icon, index) => {
          return <Icon key={index} icon={icon} />;
        })}
      </div>
      {/* brightness controller  */}
      <div className="relative w-full h-5 bg-secondary rounded-full flex items-center mb-9">
        {/* brightness value  */}
        <div className="w-1/2 h-6 bg-white rounded-full"></div>
        <div className="absolute h-4 w-full px-2 flex justify-between items-center ">
          <FaMinus className="text-primary h-2 w-2" />
          <FaPlus className="text-background h-2 w-2" />
        </div>
        {/* create another div */}
        {/* use flex */}
      </div>
      {/* bottom */}
      <div className="h-7 flex justify-between items-center">
        {/* Signal */}
        <div className="flex items-center">
          <FaSignal className="text-background h-6 w-6" />
          <p className="text-white font-semibold pl-2">Fi Network</p>
        </div>
        {/* icons */}
        <div className="flex space-x-3 items-center">
          <FaSearch className="text-background h-5 w-5" />
          <FaUserCircle className="text-background h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default NotificationContainer;
