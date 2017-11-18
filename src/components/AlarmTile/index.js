import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { Link } from 'react-router-dom';
import './index.css';

const AlarmTile = ({ title }) => {
    return (
        <Link to={`/alarms/${title.toLowerCase().slice(0, title.indexOf(' '))}`}>
            <Card className="tile">
                <CardTitle title={title} />
                <CardText>ile razy zgłoszono</CardText>
            </Card>
        </Link>
    );
};

export default AlarmTile;
