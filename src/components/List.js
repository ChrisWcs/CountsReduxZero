import React from 'react';

const List = ({arr}) => (
    <ul>
        {arr.map( (x, i) => <li key={i}>{x}</li>)}
    </ul>
);

export default List;