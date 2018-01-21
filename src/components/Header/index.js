import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import HeaderIcon from './HeaderIcon';
import HeaderLogout from './HeaderLogout';
import './index.css';

const Header = () => {
    return (
        <AppBar
            style={{ textAlign: 'center', position: 'fixed', top: '0', zIndex: 100000}}
            titleStyle={{flex: 'none'}}
            title={
                <Link to="/" style={{ color: '#fff', padding: '10px 0', marginLeft: '34px'}}>
                    Dashboard
                </Link>
            }
            className="header"
            iconElementLeft={<HeaderLogout/>}
            iconElementRight={<HeaderIcon/>}
        />
    );
};

export default Header;
