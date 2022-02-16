import React, {useState} from 'react'
import { FaWifi } from 'react-icons/fa';
const Icon = ({icon}) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  }
  // className={` ${isActive ? 'text-gray-900' : 'text-gray-200' } h-7 w-7`} 
  return (
    <div className={`${ isActive ? 'bg-white' : 'bg-gray-800'} h-14 w-14 rounded-full flex justify-center items-center`}
    onClick={handleClick}>
      <div className={` ${isActive ? 'text-gray-900' : 'text-gray-200' }`}>{icon}</div>
    </div>
  )
}

export default Icon