import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar
            style={{textAlign: 'center'}}
            title={ <Link to='/' style={{color: '#fff'}}>Dashboard</Link>}
            iconStyleLeft={{display: 'none'}}
        >
        </AppBar>
    );
};

export default Header;
