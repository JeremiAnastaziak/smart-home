import React from 'react';
import Router from '../Router';
import Register from '../Register';

class App extends React.Component {
    render() {
        const { user } = this.props.store.getState();
        return (
            <div className="desk">
                {!user.isAuth ? <Register isFetching={user.isFetching}/> : <Router store={this.props.store} />}
            </div>
        );
    }
}

export default App;
