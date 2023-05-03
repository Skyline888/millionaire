import React, { FC } from 'react'
import { AnswersProps } from '../../../utils/types'
import { ReactComponent as AnswerIcon } from '../../../images/RectangleVariant.svg';

const Answers: FC<AnswersProps> = ({ text, correct, order, onSelectAnswer, answerState}) => {
  return (
    <div className={answerState} >
      <div className="answers-block" onClick={() => onSelectAnswer({ text, correct, order })}>
        <AnswerIcon />
        <div className="answers-text">
          <div className="answers-order">{order}</div>
          {text}
        </div>
      </div>
    </div>
  )
}

export default Answers