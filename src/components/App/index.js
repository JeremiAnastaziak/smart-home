import React from 'react';
import Router from '../Router';
import Notification from '../Notification';

class App extends React.Component {

    render() {
        return (
            <div className="desk">
                <Notification />
                <Router />
            </div>
        );
    }
}

export default App;
