import { createStore } from 'redux-zero';

const initialState = {
    counts: []
};

const store = createStore(initialState);

export default store;