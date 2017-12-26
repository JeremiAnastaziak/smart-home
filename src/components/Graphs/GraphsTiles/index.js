import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import { cyan500 } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import classNames from 'classnames';

const GraphsTiles = ({ tiles, active, changeGraphView }) => {
    const renderText = tile => {
        switch (tile) {
            case 'temperature':
                return 'Temperatura';
            case 'sound_level':
                return 'Moc sygnału';
            default:
                return tile;
        }
    };
    return (
        <div className="graphs-tiles">
            {tiles.map(tile => (
                <Paper
                    key={tile}
                    label={tile}
                    onClick={() => changeGraphView(tile)}
                    zDepth={tile === active ? 2 : 0}
                    className={classNames('graphs-tiles-item', {
                        'graphs-tiles-item--selected': tile === active
                    })}
                >
                    {renderText(tile)}
                </Paper>
            ))}
        </div>
    );
};

export default GraphsTiles;
