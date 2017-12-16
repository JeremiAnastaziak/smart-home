import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ReloadIcon from 'material-ui/svg-icons/action/cached';
import { cyan500 } from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';

const GraphsTiles = ({ tiles, active, changeGraphView }) => {
    return tiles.map(tile => (
        <MenuItem
            key={tile}
            label={tile}
            onClick={() => changeGraphView(tile)}
            style={{
                width: '100%',
                color: tile === active ? cyan500 : '#000'
            }}
        >
            {tile}
        </MenuItem>
    ));
};

export default GraphsTiles;
