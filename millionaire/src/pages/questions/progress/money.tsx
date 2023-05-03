import React, { FC } from 'react'
import { getMoneyFromNumber } from 'utils/functions';

interface MoneyProps {
  active: boolean;
  value: number;
}

const Money: FC<MoneyProps> = ({active, value }) => {
  return (
    <div className={!!active ? "money-block active" : "money-block"}>
      <div className={!!active ? "money-item active" : "money-item"}>{getMoneyFromNumber(value)}</div>
    </div>
    
  )
}

export default Money
