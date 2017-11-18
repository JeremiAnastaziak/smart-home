import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import { Link } from 'react-router-dom';

const IconLeft = () => {
    return (
        <Link to="/">
            <IconButton>
                <NavigationArrowBackIcon color="#fff" />
            </IconButton>
        </Link>
    );
};

const Header = ({ alarmType, showIconLeft = false }) => {
    const renderTitle = (alarmType) => {
        return alarmType
            ? `${alarmType.replace(/(^|\s)\S/g, l => l.toUpperCase())} alarm details`
            : 'Smart home panel';
    };

    return (
        <AppBar
            title={renderTitle(alarmType)}
            showMenuIconButton={showIconLeft}
            iconElementLeft={showIconLeft && <IconLeft />}
        />
    );
};

export default Header;
