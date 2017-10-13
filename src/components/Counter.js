import React from 'react';

import { increment, decrement } from '../actions/actions';

const Counter = ({count, index}) => (
    <div>
        <button onClick={increment(index)}>+</button>
        <h2>{count}</h2>
        <button onClick={decrement(index)}>-</button>
    </div>
);

export default Counter;