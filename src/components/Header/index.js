import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import HeaderIcon from './HeaderIcon';

const Header = ({ locked }) => {
    return (
        <AppBar
            style={{ textAlign: 'center' }}
            title={
                <Link to="/" style={{ color: '#fff' }}>
                    Dashboard
                </Link>
            }
            iconStyleLeft={{ display: 'none' }}
            iconElementRight={<HeaderIcon locked={locked} />}
        />
    );
};

export default Header;
