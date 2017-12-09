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

const mapStateToProps = ({ dashboardAlarm, dashboard }) => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

// const Icon = ({ alarmPage, alarmViewClick, openSideBar }) => {
//     return alarmPage ? (
//         <Link to="/" onClick={() => alarmViewClick('')}>
//             <IconButton>
//                 <NavigationArrowBackIcon color="#fff" />
//             </IconButton>
//         </Link>
//     ) : (
//         <IconButton onClick={() => openSideBar()}>
//             <NavigationMenu color="#fff" />
//         </IconButton>
//     );
// };

const upperCaseFirstLetter = word => word.replace(/(^|\s)\S/g, l => l.toUpperCase());

const Header = ({
}) => {
    const renderTitle = title => {
        return title
            ? `${upperCaseFirstLetter(title)} alarm details`
            : 'Dashboard';
    };

    return (
        <AppBar
            title={ <Link to='/' style={{color: '#fff'}}> {renderTitle()} </Link>}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            iconElementRight={ <Link to='/devices'> <FlatButton style={{color: '#fff'}} label="Urządzenia"/> </Link>
            }
            iconStyleLeft={{display: 'none'}}
            iconStyleRight={{
                marginTop: '13px',
                color: '#fff'
            }}
        />
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
