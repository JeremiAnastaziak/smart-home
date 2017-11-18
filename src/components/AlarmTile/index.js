import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import './index.css';

const AlarmTile = ({ title }) => {
    return (
        <Card className="tile">
            <CardTitle title={title} />
            <CardText>ile razy zgłoszono</CardText>
        </Card>
    );
};

export default AlarmTile;
