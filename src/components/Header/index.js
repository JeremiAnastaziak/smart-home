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

const upperCaseFirstLetter = word => word.replace(/(^|\s)\S/g, l => l.toUpperCase());

const Header = ({ alarmType, showIconLeft = false }) => {
    const renderTitle = alarmType => {
        return alarmType
            ? `${upperCaseFirstLetter(alarmType)} alarm details`
            : 'Smart home panel';
    };

    return (
        <AppBar
            title={renderTitle(alarmType)}
            showMenuIconButton={showIconLeft}
            iconElementLeft={<IconLeft />}
        />
    );
};

export default Header;
