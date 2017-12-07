import React from 'react';
import Router from '../Router';
import Landing from '../Landing';
import Notification from '../Notification';

class App extends React.Component {

    render() {
        const { user } = this.props.store.getState();
        return (
            <div className="desk">
                <Notification />
                <Router />
            </div>
        );
    }
}

export default App;
