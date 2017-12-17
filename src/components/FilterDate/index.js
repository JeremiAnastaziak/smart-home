import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import areIntlLocalesSupported from 'intl-locales-supported';

let DateTimeFormat;

if (areIntlLocalesSupported(['pl', 'pl-PL'])) {
    DateTimeFormat = global.Intl.DateTimeFormat;
} else {
    const IntlPolyfill = require('intl');
    DateTimeFormat = IntlPolyfill.DateTimeFormat;
    require('intl/locale-data/jsonp/pl');
    require('intl/locale-data/jsonp/pl-PL');
}

const minDate = new Date();
const maxDate = new Date();
minDate.setDate(minDate.getDate() - 1);
minDate.setHours(0, 0, 0, 0);
maxDate.setHours(0, 0, 0, 0);

const FilterDate = ({ hint, onDateChange, min }) => {
    return (
        <DatePicker
            floatingLabelText={hint}
            DateTimeFormat={DateTimeFormat}
            locale="pl-PL"
            defaultDate={min ? minDate : maxDate}
            maxDate={maxDate}
            autoOk
            cancelLabel="Anuluj"
            onChange={(e, date) => onDateChange(date)}
        />
    );
};

export default FilterDate;
