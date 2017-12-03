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
                {!user.isAuth ? (
                    <Landing isFetching={user.isFetching} />
                ) : (
                    <Router />
                )}
            </div>
        );
    }
}

export default App;
