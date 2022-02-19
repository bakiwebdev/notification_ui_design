import React, {useState} from 'react'
import { motion } from 'framer-motion';
const Icon = ({icon, error}) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  }

  const getBackgroundColor = () => {
    if (error) {
      return 'bg-error';
    } else {
      return 'bg-white';
    }
  }
  return (
    <motion.div 
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className={`${ isActive ? getBackgroundColor() : 'bg-secondary'} h-14 w-14 rounded-full flex justify-center items-center`}
    onClick={handleClick}>
      <div className={` ${isActive ? 'text-primary' : 'text-white' }`}>{icon}</div>
    </motion.div>
  )
}

export default Icon