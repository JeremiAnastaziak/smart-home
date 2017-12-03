import React from 'react';
import Router from '../Router';
import Landing from '../Landing';

class App extends React.Component {
    render() {
        const { user } = this.props.store.getState();
        return (
            <div className="desk">
                {/* {!user.isAuth ? (
                    <Landing isFetching={user.isFetching} />
                ) : (
                    <Router />
                )} */}
                <Router />
            </div>
        );
    }
}

export default App;
