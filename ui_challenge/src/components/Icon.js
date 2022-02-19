import React, {useState} from 'react'
import { FaWifi } from 'react-icons/fa';
const Icon = ({icon}) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  }
  return (
    <div className={`${ isActive ? 'bg-white' : 'bg-secondary'} h-14 w-14 rounded-full flex justify-center items-center`}
    onClick={handleClick}>
      <div className={` ${isActive ? 'text-primary' : 'text-white' }`}>{icon}</div>
    </div>
  )
}

export default Icon