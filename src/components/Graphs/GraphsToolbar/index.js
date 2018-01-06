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
    return (
        <div className="graphs-toolbar">
            <FilterDate
                hint="Data od"
                value={filters.startDate || null}
                onDateChange={value => changeGraphFilter({ startDate: value })}
                min
            />
            <FilterDate
                hint="Data do"
                value={filters.endDate || null}
                minData={filters.startDate}
                onDateChange={value => changeGraphFilter({ endDate: value })}
            />
            <IconButton
                onClick={() => reloadGraphData()}
                disabled={isFetching}
                style={{ position: 'absolute', right: 0, top: 0 }}
            >
                <ReloadIcon />
            </IconButton>
        </div>
    );
};

export default GraphsToolbar;
