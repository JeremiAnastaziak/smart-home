import React, { Component } from 'react';
import Router from '../Router';
import Notification from '../Notification';

const App = () => {
    return (
        <div className="desk">
            <Notification />
            <Router />
        </div>
    );
};

export default App;
