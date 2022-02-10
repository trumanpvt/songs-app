import React from 'react';

import {Provider} from 'react-redux'
import store from './store'

import Songs from "./components/songs";

import './App.css';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Songs/>
            </div>
        </Provider>
    );
}

export default App;
