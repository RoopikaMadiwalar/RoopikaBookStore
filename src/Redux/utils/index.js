import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from 'utils/store';
import App from 'components/App';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
);