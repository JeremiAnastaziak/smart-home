import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import rootReducer from './reducers/root-reducer';
import './index.css';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);

const store = createStore(
    rootReducer,
    {},
    enhancer
);

const render = () =>
    ReactDOM.render(
        <Provider store={store}>
            <MuiThemeProvider>
                <App store={store}/>
            </MuiThemeProvider>
        </Provider>,
        document.getElementById('root')
    );
registerServiceWorker();

store.subscribe(render);
render();
