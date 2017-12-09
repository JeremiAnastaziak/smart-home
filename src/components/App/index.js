import React, { Component } from 'react';
import Router from '../Router';
import Notification from '../Notification';
class App extends Component {
    render() {
        return (
            <div className="desk">
                <div>
                    <Notification />
                    <Router />
                </div>
            </div>
        );
    }
}

export default App;
