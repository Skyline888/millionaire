import React, { FC }  from 'react'
import './main.css';
import hand from '../../images/hand.svg';

interface LayoutTypes {
  description?: string;
  buttonText: string;
}

const Main: FC<LayoutTypes> = ({ description, buttonText }) => {

  //Who wants to be a millionaire?
  return (
    <div className="main-page">
        <div className="main-image"><img src={hand} alt="hand" /></div>
        <div className="info">
            <div className="info-title">{description} </div>
            <button className='info-button'>{buttonText}</button>
        </div>
    </div>
  )
}

export default Main
