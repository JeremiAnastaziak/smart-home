import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {
    Toolbar,
    ToolbarGroup,
    ToolbarSeparator,
    ToolbarTitle
} from 'material-ui/Toolbar';

const TableDataToolbar = () => {
    return (
        <Toolbar>
            <ToolbarGroup>
                <ToolbarTitle text="Latest records" />
            </ToolbarGroup>
            <ToolbarGroup>
                <FontIcon className="muidocs-icon-custom-sort" />
                <ToolbarSeparator />
                <RaisedButton label="Button" primary={true} />
                <IconMenu
                    iconButtonElement={
                        <IconButton touch={true}>
                            <NavigationExpandMoreIcon />
                        </IconButton>
                    }
                >
                    <MenuItem primaryText="Najnowsze" />
                    <MenuItem primaryText="Najstarsze" />
                </IconMenu>
            </ToolbarGroup>
        </Toolbar>
    );
};

export default TableDataToolbar;
