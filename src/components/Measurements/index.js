import React from 'react';
import TableCustom from '../Table';
import { connect } from 'react-redux';

const mapStateToProps = ({ dashboard }) => {
    return {
        records: dashboard.records.measurements,
        isFetching: dashboard.isFetching,
    };
};


const Measurements = (props) => {
    return <TableCustom {...props} />;
};

export default connect(mapStateToProps)(Measurements);
