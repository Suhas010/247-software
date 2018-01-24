import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import { loadState } from './localStorage';
import { saveState } from './localStorage';
import  throttle  from 'lodash/throttle';
import './index.css';
import App from './components/App/Component/App';
import registerServiceWorker from './registerServiceWorker';
import allReducers from './reducers/index';

//Matrial UI dependancy for touch tap event. needs to inject manually
injectTapEventPlugin();

const persistedState = loadState();

//const logger = createLogger();

const store = createStore(
    allReducers,
    persistedState
);

// Local storage for states, Even though i don't want to save all the states of App in storage but hea I have done the same 
store.subscribe(throttle(()=> {
    saveState(store.getState())
},1000));
ReactDOM.render(

    <MuiThemeProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>
    
    ,document.getElementById('root')
);

 registerServiceWorker();
