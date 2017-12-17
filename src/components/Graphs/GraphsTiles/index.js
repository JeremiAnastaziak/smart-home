import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import { cyan500 } from 'material-ui/styles/colors';

const GraphsTiles = ({ tiles, active, changeGraphView }) => {
    return tiles.map(tile => (
        <MenuItem
            key={tile}
            label={tile}
            onClick={() => changeGraphView(tile)}
            style={{
                width: '100%',
                textAlign: 'center',
                color: tile === active ? cyan500 : '#000'
            }}
        >
            {tile}
        </MenuItem>
    ));
};

export default GraphsTiles;
