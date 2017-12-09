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
            : 'Smart home panel';
    };

    return (
        <AppBar
            title={renderTitle()}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            iconElementRight={ <FlatButton label="Urządzenia"/>
            }
            iconStyleRight={{
                marginTop: '7px'
            }}
        />
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
