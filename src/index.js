import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import config from './firebase/config';
import * as firebase from 'firebase';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import 'firebase/firestore';


if (firebase.apps.length === 0) {
    firebase.initializeApp(config)
}

export const firestore = firebase.firestore()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
