import React from 'react';
import IconButton from 'material-ui/IconButton';
import ReloadIcon from 'material-ui/svg-icons/action/cached';
import FilterDate from '../../FilterDate';
import './index.css';

const GraphsToolbar = ({
    reloadGraphData,
    changeGraphFilter,
    isFetching,
    filters
}) => {
    const minDate = new Date();
    const maxDate = new Date();

    const startDateNumber = filters.startDate ?
        new Date(filters.startDate).getTime() :
        new Date(minDate.setDate(minDate.getDate() - 1)).getTime();

    const endDateNumber = filters.endDate ?
        new Date(filters.endDate).getTime() :
        new Date().getTime();

    return (
        <div>
            <div className="graphs-toolbar">
                <FilterDate
                    hint="Data od"
                    value={filters.startDate || null}
                    minData={filters.startDate}
                    onDateChange={value => changeGraphFilter({ startDate: value })}
                    key="min"
                    min
                />
                <FilterDate
                    hint="Data do"
                    value={filters.endDate || null}
                    minData={filters.startDate}
                    key="max"
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
        </div>
    );
};

export default GraphsToolbar;
