import React from 'react';
import TableCustom from '../Table';
import { connect } from 'react-redux';

const mapStateToProps = ({ dashboard, devices }) => {
    return {
        records: dashboard.records.measurements,
        isFetching: dashboard.isFetching,
        deviceType: devices.selected && devices.selected.deviceType
    };
};

const Measurements = props => {
    const deviceTypeHandle = {
        date: 'Data',
        temperature: 'Temperatura',
        soundLevel: 'Moc sygnału',
        handlePosition: 'Pozycja klamki',
        alarm: 'Alarmy'
    };

    const deviceTypeNode = {
        date: 'Data',
        temperature: 'Temperatura',
        lightIntensity: 'Natężenie światła',
        carbonDioxide: 'Stężenie dwutleneku węgla',
        humidity: 'Wilgotność względna'
    };

    return (
        <TableCustom
            {...props}
            content={
                props.deviceType === 'HANDLE' ? deviceTypeHandle : deviceTypeNode
            }
        />
    );
};

export default connect(mapStateToProps)(Measurements);
