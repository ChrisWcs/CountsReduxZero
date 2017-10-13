import React from 'react';
import { Provider } from 'redux-zero';
import store from './store/store';

import ListCon from './containers/ListCon';
import Creator from './components/Creator';

const App = () => (
    <Provider store={store}>
        <div>
            <Creator/>
            <ListCon/>
        </div>
    </Provider>
);

export default App;