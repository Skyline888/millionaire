import React, { FC } from 'react'
import Money from './money'
import './progress.css';
import price from '../../../utils/questions_price.json';

interface ProgressProps {
  questionsNumber: number
}


const Progress: FC<ProgressProps> = ({ questionsNumber }) => {
  return (
    <div className="progress">
      <div>
        {[...price]
          .reverse()
          .map((variant) => (
          <Money key={variant.id} active={questionsNumber === variant.id} value={variant.value}/>
        ))}
      </div> 
    </div>
  )
}

export default Progress
