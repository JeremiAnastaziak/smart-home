import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleSideBar } from '../../actions/dashboard-actions';
import { setAlarmView } from '../../actions/dashboard-alarm-actions';
import Chip from 'material-ui/Chip';
import { filterHandle } from '../../actions/dashboard-actions';
import FlatButton from 'material-ui/FlatButton';

const Header = () => {
    return (
        <AppBar
            title={ <Link to='/' style={{color: '#fff'}}>Dashboard</Link>}
            iconStyleLeft={{display: 'none'}}
        />
    );
};

export default Header;

// iconClassNameRight="muidocs-icon-navigation-expand-more"
// iconElementRight={ <Link to='/devices'> <FlatButton style={{color: '#fff'}} label="Urządzenia"/> </Link>
// }
// iconStyleRight={{
//     marginTop: '13px',
//     color: '#fff'
// }}
