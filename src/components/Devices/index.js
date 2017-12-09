import React, { PureComponent } from 'react';
import { Card, CardTitle, CardHeader } from 'material-ui/Card';
import Form from './DevicesForm';
import List from './DevicesList';

class Devices extends PureComponent {
    render() {
        return (
            <Card>
                <CardTitle title="Panel sterowania urzadzeniami"/>
                <Form />
                <List />
            </Card>
        )
    }
}

export default Devices;
