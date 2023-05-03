import React, { FC } from 'react'
import { AnswersProps } from '../../../utils/types'
import { ReactComponent as AnswerIcon } from '../../../images/RectangleVariant.svg';
import { geVariantOrder } from 'utils/functions';

const Variant: FC<AnswersProps> = ({ text, correct, index, onSelectAnswer}) => {
  return (
    <div className="variant-block" onClick={() => onSelectAnswer({ text, correct })}>
      <AnswerIcon />
      <div className="variant">
        <div className="variant-order">{geVariantOrder(index)}</div>
        {text}
      </div>
    </div>
    
  )
}

export default Variant