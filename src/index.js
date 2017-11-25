import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import dummyData from './api/dummyApi';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import rootReducer from './reducers/root';

import './index.css';

const todoApp = rootReducer;

const store = createStore(
    todoApp,
    {
        records: dummyData,
        limit: 5,
        total: 50,
        pagination: {
            activePage: 1
        }
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const render = () =>
    ReactDOM.render(
        <Provider store={store}>
            <MuiThemeProvider>
                <App/>
            </MuiThemeProvider>
        </Provider>,
        document.getElementById('root')
    );
registerServiceWorker();

store.subscribe(render);
render();
