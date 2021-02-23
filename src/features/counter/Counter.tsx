import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    decrement,
    increment,
    selectCount,
} from './counterSlice';

const Counter = function () {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <button onClick={() => dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button onClick={() => dispatch(increment())}>+</button>
        </React.Fragment>
    )
}

export default Counter;
