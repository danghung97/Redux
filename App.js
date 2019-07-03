import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Navigator from './components/navigation';
import Main from './components/cart';
import store from './components/store/store';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navigator />
            </Provider>
        );
    }
}

