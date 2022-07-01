import React from 'react';
import { observer } from "mobx-react-lite"

import Counter from '../../store/counter';
import './CountingClicks.css';

const CountingClicks = observer(() => {

  const onClickIncrement = () => {
    Counter.increment();
  }

  const onClickDecrement = () => {
    Counter.decrement();
  }

  return (
    <div className="counting-clicks-wrapper">
      <span className="counting-clicks-wrapper__counting">
        {Counter.count}
      </span>

      <button
        className="counting-clicks-wrapper__button"
        onClick={onClickIncrement}
      >
        Increment
      </button>

      <button
        className="counting-clicks-wrapper__button"
        onClick={onClickDecrement}
      >
        Decrement
      </button>
    </div>
  );
})

export default CountingClicks;
