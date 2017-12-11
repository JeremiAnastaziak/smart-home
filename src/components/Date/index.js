import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import areIntlLocalesSupported from 'intl-locales-supported';
import persianUtils from 'material-ui-persian-date-picker-utils';

let DateTimeFormat;

/**
 * Use the native Intl.DateTimeFormat if available, or a polyfill if not.
 */
if (areIntlLocalesSupported(['pl', 'pl-PL'])) {
  DateTimeFormat = global.Intl.DateTimeFormat;
} else {
  const IntlPolyfill = require('intl');
  DateTimeFormat = IntlPolyfill.DateTimeFormat;
  require('intl/locale-data/jsonp/pl');
  require('intl/locale-data/jsonp/pl-PL');
}

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
                DateTimeFormat={DateTimeFormat}
                locale="pl-PL"
                value={value}
                autoOk
                cancelLabel="Anuluj"
                onChange={(e, date) => {
                    this.setState({ date })
                    onClick(date);
                }}
            />
        );
    }
};

export default Date;
