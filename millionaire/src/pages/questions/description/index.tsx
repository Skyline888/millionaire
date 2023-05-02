import React, { FC } from 'react';
import Variant from './variant';
import './description.css';
import { Questions } from '../../../utils/types';

const Description: FC<Questions> = ({ question, answers }) => {

  return (
    <div className="description">
      <div>{question}</div>
      <div>
        {answers.map((answer) => (
          <Variant text={answer.text} correct={answer.correct} />
        ))}
      </div> 
    </div>
  )
}

export default Description