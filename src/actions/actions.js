import store from '../store/store';

export const newCounter = () => {
    store.setState({
        counts: [...store.getState().counts, 0]
    });
};

export const increment = (index) => () => {
    let temp = [...store.getState().counts];
    temp[index] = temp[index] + 1;

    store.setState({
        counts: temp
    });
};

export const decrement = (index) => () => {
    let temp = [...store.getState().counts];
    temp[index] = temp[index] - 1;

    store.setState({
        counts: temp
    });
};