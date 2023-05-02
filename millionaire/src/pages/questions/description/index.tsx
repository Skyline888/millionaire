import React, { FC } from 'react';
import Variant from './variant';
import './description.css';

interface DescriptionType {
  questions: string;
}

const Description: FC<DescriptionType> = ({ questions }) => {
  return (
    <div className="description">
      <div>{questions}</div>
      <div>
        {[].map((variant) => (
          <Variant />
        ))}
      </div> 
    </div>
  )
}

export default Description