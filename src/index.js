import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import dummyData from './api/dummyApi';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';

const todoApp = combineReducers({});

const store = createStore(
    todoApp,
    {
        "records": dummyData
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
