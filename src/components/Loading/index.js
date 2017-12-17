import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';

const Loading = () => {
    return (
        <Card
            style={{
                minWidth: '300px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}
        >
            <CardTitle
                title={
                    <span
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <p style={{ textAlign: 'center' }}>
                            Sprawdzam sesję uzytkownika
                        </p>
                        <CircularProgress size={30} />
                    </span>
                }
            />
        </Card>
    );
};

export default Loading;
