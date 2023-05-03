import React, { FC } from 'react'
import './progress.css';
import prices from '../../../utils/questions_price.json';
import Money from './money';
import { ProgressProps } from 'utils/types';

const Progress: FC<ProgressProps> = ({ questionsNumber }) => {
  return (
    <div className="progress">
      {[...prices]
        .reverse()
        .map((price) => (
        <Money key={price.id} questionsNumber={questionsNumber} value={price.value} id={price.id} />
      ))}
    </div>
  )
}

export default Progress
