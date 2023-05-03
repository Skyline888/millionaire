import React, { FC, useState } from 'react'
import './mobile.css';
import Progress from '../progress';
import Hamburger from 'hamburger-react'


interface ProgressProps {
  questionsNumber: number
}


const MobileMenu: FC<ProgressProps> = ({ questionsNumber }) => {
  const [isOpen, setOpen] = useState(false)
  
  return (
    <div className="mobile-section">
      <div className="mobile-hamburger">
        <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
      </div>
      {isOpen && (
        <Progress questionsNumber={questionsNumber} />
      )}
    </div>
    
  )
}

export default MobileMenu
