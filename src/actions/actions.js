import store from '../store/store';

export const newCounter = () => {
    store.setState({
        counts: [...store.getState().counts, 0]
    });
};