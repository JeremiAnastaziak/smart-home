import React from 'react';
import { ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import EditIcon from 'material-ui/svg-icons/action/build';
import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';
import DevicesFormEdition from '../DevicesFormEdition';

const DevicesListElement = ({
    name,
    id,
    deviceType,
    editDeviceSubmit,
    toggleDeviceDialog,
    toggleDeviceEdition,
    isDuringEdition,
    disableIcon
}) => {
    this.openDialog = false;
    const shouldToggleEdition = isDuringEdition ?
        <DevicesFormEdition editDeviceSubmit={editDeviceSubmit} toggleDeviceEdition={toggleDeviceEdition} id={id} deviceType={deviceType}/>
        : name;

    return (
        <div>
            <ListItem
                primaryText={shouldToggleEdition}
                secondaryText={`id: ${id}`}
                secondaryTextLines={1}
                rightIconButton={
                    <div>
                        <IconButton onClick={() => toggleDeviceEdition()} disabled={disableIcon}>
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => toggleDeviceDialog(id, name, true)} disabled={disableIcon}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                }
            />
            <Divider />
        </div>
    );
};

export default DevicesListElement;
