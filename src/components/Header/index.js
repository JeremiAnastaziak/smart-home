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

const mapStateToProps = ({ dashboardAlarm, dashboard }) => {
    return {
        title: dashboardAlarm.activeAlarmView,
        activeHandle: dashboard.activeHandle
    };
};

const mapDispatchToProps = dispatch => {
    return {
        openSideBar: () => dispatch(toggleSideBar()),
        alarmViewClick: title => {
            dispatch(setAlarmView(title));
        },
        disableHandleFilter: emptyHanleName => dispatch(filterHandle(emptyHanleName))
    };
};

const Icon = ({ alarmPage, alarmViewClick, openSideBar }) => {
    return alarmPage ? (
        <Link to="/" onClick={() => alarmViewClick('')}>
            <IconButton>
                <NavigationArrowBackIcon color="#fff" />
            </IconButton>
        </Link>
    ) : (
        <IconButton onClick={() => openSideBar()}>
            <NavigationMenu color="#fff" />
        </IconButton>
    );
};

const renderChip = (handleName, disableHandleFilter) => {
    return <Chip onRequestDelete={() => disableHandleFilter()}>{handleName}</Chip>;
};

const upperCaseFirstLetter = word => word.replace(/(^|\s)\S/g, l => l.toUpperCase());

const Header = ({
    title,
    openSideBar,
    alarmViewClick,
    activeHandle,
    disableHandleFilter
}) => {
    const renderTitle = title => {
        return title
            ? `${upperCaseFirstLetter(title)} alarm details`
            : 'Smart home panel';
    };

    return (
        <AppBar
            title={renderTitle(title)}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={openSideBar}
            iconElementLeft={
                <Icon
                    alarmPage={!!title}
                    alarmViewClick={alarmViewClick}
                    openSideBar={openSideBar}
                />
            }
            iconElementRight={
                activeHandle ? renderChip(activeHandle, disableHandleFilter) : null
            }
            iconStyleRight={{
                marginTop: '15px'
            }}
        />
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
