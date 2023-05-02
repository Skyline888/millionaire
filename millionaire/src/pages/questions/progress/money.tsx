import React, { FC } from 'react'

interface MoneyProps {
  active: boolean;
  value: number;
}

const Money: FC<MoneyProps> = ({active, value }) => {
  return (
    <div className={!!active ? "money-item active" : "money-item"}>{value}</div>
  )
}

export default Money
