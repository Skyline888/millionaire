import React, { FC } from 'react'
import { Answers } from '../../../utils/types'

const Variant: FC<Answers> = ({ text, correct}) => {
  return (
    <div>{text}</div>
  )
}

export default Variant