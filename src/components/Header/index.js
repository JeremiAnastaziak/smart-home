import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import HeaderIcon from './HeaderIcon';
import HeaderLogout from './HeaderLogout';

const Header = () => {
    return (
        <AppBar
            style={{ textAlign: 'center' }}
            title={
                <Link to="/" style={{ color: '#fff' }}>
                    Dashboard
                </Link>
            }
            iconElementLeft={<HeaderLogout/>}
            iconElementRight={<HeaderIcon/>}
        />
    );
};

export default Header;
