import React from 'react';
import IconButton from 'material-ui/IconButton';
import ReloadIcon from 'material-ui/svg-icons/action/cached';
import FilterDate from '../../FilterDate';
import uuidv1 from 'uuid/v1';
import './index.css';

const GraphsToolbar = ({
    reloadGraphData,
    changeGraphFilter,
    isFetching,
    field,
    filters
}) => {
    const minDate = new Date();
    const maxDate = new Date();

    const startDateNumber = filters.startDate ?
        new Date(filters.startDate).getTime() :
        new Date(minDate.setDate(minDate.getDate() - 1)).getTime();

    const endDateNumber = filters.endDate ?
        new Date(filters.endDate).getTime() :
        new Date(maxDate.setDate(maxDate.getDate() + 1)).getTime();


    const renderUnit = (parametr) => {
        const units = {
            'carbonDioxide': '%',
            'temperature': '°C',
            'lightIntensity': 'lx',
            'humidity': '%',
            'sound_level': 'dB'
        }
        return `[${units[parametr]}]`;
    }
    return (
        <div style={{position: 'relative'}}>
            <div className="graphs-toolbar">
                <FilterDate
                    hint="Data od"
                    value={filters.startDate || null}
                    minData={filters.startDate}
                    onDateChange={value => changeGraphFilter({ startDate: value })}
                    min={true}
                />
                <FilterDate
                    hint="Data do"
                    value={filters.endDate || null}
                    minData={filters.startDate}
                    onDateChange={value => changeGraphFilter({ endDate: value })}
                />

                <IconButton
                    tooltip="Odswiez dane"
                    onClick={() => reloadGraphData()}
                    disabled={isFetching}
                    style={{ position: 'absolute', right: 0, top: 0 }}
                >
                    <ReloadIcon />
                </IconButton>
            </div>
            {startDateNumber > endDateNumber && (
                <p style={{ color: 'red', marginLeft: '10px' }}>
                    Data zakończenia nie może być starsza od daty rozpoczęcia
                </p>
            )}
            <p className="graphs-unit">{renderUnit(field)}</p>
        </div>
    );
};

export default GraphsToolbar;
