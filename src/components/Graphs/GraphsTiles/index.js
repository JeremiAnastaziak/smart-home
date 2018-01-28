import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import { cyan500 } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import classNames from 'classnames';

const GraphsTiles = ({ fields, active, deviceType, changeGraphView }) => {
    const renderText = tile => {
        switch (tile) {
            case 'temperature':
                return 'Temperatura';
            case 'sound_level':
                return 'Moc sygnału';
            case 'carbonDioxide':
                return 'Stężenie dwutlenku węgla';
            case 'lightIntensity':
                return 'Natężenie światła';
            case 'humidity':
                return 'Wilgotność względna';
            default:
                return tile;
        }
    };

    const fieldsForDevice =
        deviceType === 'HANDLE'
            ? ['temperature', 'sound_level']
            : ['temperature', 'lightIntensity', 'humidity', 'carbonDioxide'];

    return (
        <div>
            <h3 style={{margin: "10px 0 0 5px", fontWeight: 400}} >Wybrany parametr:</h3>
            <div className="graphs-tiles">
                {fields.map(
                    tile =>
                        fieldsForDevice.includes(tile) && (
                            <Paper
                                key={tile}
                                label={tile}
                                onClick={() => changeGraphView(tile)}
                                zDepth={tile === active ? 2 : 1}
                                className={classNames('graphs-tiles-item', {
                                    'graphs-tiles-item--selected': tile === active
                                })}
                            >
                                {renderText(tile)}
                            </Paper>
                        )
                )}
            </div>
        </div>
    );
};

export default GraphsTiles;
