import React from 'react';
import Date from '../../Date';
import Filter from '../../Filter';
import IconButton from 'material-ui/IconButton';
import ReloadIcon from 'material-ui/svg-icons/action/cached';

const GraphsToolbar = ({
    reloadGraphData,
    changeGraphFilter,
    isFetching,
    handles,
    field,
    filters
}) => {
    return (
        <div
            style={{
                display: 'flex',
                padding: '0 10px',
                justifyContent: 'space-between'
            }}
        >
            <Date
                hint="Data od"
                value={filters.startDate || null}
                onClick={value => changeGraphFilter({ startDate: value })}
            />
            <Date
                hint="Data do"
                value={filters.endDate || null}
                onClick={value => changeGraphFilter({ endDate: value })}
            />
            <Filter showAll activeFilter={filters.handle} handles={handles} onFilterChange={value => changeGraphFilter({handle: value})}/>
            <IconButton onClick={() => reloadGraphData()} disabled={isFetching}>
                <ReloadIcon />
            </IconButton>
        </div>
    );
};

export default GraphsToolbar;
