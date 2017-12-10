import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ReloadIcon from 'material-ui/svg-icons/action/cached';

const GraphsTiles = ({tiles, active, changeGraphView}) => {
    return tiles.map(tile => <RaisedButton key={tile} label={tile} primary={tile === active} onClick={() => changeGraphView(tile)}/>)
}

export default GraphsTiles;
