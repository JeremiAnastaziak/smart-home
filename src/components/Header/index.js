import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import HeaderIcon from './HeaderIcon';
import HeaderLogout from './HeaderLogout';
import HeaderSelect from '../HeaderSelect';
import './index.css';

const Header = () => {
    return (
        <AppBar
            style={{
                textAlign: 'center',
                top: '0',
                zIndex: 1500
            }}
            titleStyle={{ flex: 'none' }}
            title={
                <div style={{ display: 'flex', height: '64px' }}>
                    <Link
                        to="/"
                        className="header-title"
                        style={{
                            color: '#fff',
                            padding: '10px 0',
                            marginLeft: '34px'
                        }}
                    >
                        Platforma BIoT
                    </Link>
                    <HeaderSelect className="header-select" />
                </div>
            }
            className="header"
            iconElementLeft={<HeaderLogout />}
            iconElementRight={<HeaderIcon />}
        />
    );
};

export default Header;
