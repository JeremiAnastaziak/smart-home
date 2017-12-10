import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';

class Date extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: null
        }
    }

    render() {
        const { hint, onClick, value } = this.props;
        return (
            <DatePicker
                hintText={hint}
                value={value}
                onChange={(e, date) => {
                    this.setState({ date })
                    onClick(date);
                }}
            />
        );
    }
};

export default Date;
