import { FC } from 'react';
import { getMoneyClass, getMoneyFromNumber } from 'utils/functions';
import { MoneyProps } from 'utils/types';
import { ReactComponent as MoneyIcon } from '../../../images/Rectangle.svg';

const Money: FC<MoneyProps> = ({questionsNumber, value, id })  => {

    return (
      <div className={getMoneyClass(questionsNumber, id)}>
        <div className="money-item">
          {getMoneyFromNumber(value)}
          <MoneyIcon />
        </div>
      </div>
    )
  
}

export default Money;