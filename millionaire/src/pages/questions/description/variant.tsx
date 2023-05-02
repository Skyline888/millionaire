import React, { FC } from 'react'
import { AnswersProps } from '../../../utils/types'

const Variant: FC<AnswersProps> = ({ text, correct, onSelectAnswer}) => {
  return (
    <div>{text}</div>
  )
}

export default Variant