import React from 'react';
import Counter from './Counter';

const List = ({arr}) => (
    <div>
        {arr.map( (x, i) => <Counter key={i} count={x} index={i} />)}
    </div>
);

export default List;