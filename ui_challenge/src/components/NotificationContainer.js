import React from "react";
import Icon from "./Icon";
import { FaWifi, FaCode, FaSpeakap, FaBluetooth, FaLightbulb, FaPodcast } from "react-icons/fa";

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
    <div className="w-1/3 h-64 bg-gray-900 rounded-2xl px-6 py-4 flex flex-col">
      <div className="h-7 flex justify-between items-center">
        {/* date and time */}
        <div>
          <p className="text-white font-semibold">
            09:00 <span className="font-light">Tue,Aug 7</span>
          </p>
        </div>
        {/* phone status */}
        <div>
          <p className="text-white font-light">100%</p>
        </div>
      </div>
      <div className="w-full h-20 my-4 flex items-center justify-between">
        {/* <Icon icon={<FaWifi className='h-7 w-7'/>}/> */}
        { 
            icons.map((icon, index) => {
              return <Icon key={index} icon={icon} />
            })
        }
      </div>
    </div>
  );
};

export default NotificationContainer;
