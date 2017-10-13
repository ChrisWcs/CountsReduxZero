import React from 'react';
import { newCounter } from '../actions/actions';

const Creator = () => (
    <button onClick={newCounter}>New Counter</button>
);

export default Creator;