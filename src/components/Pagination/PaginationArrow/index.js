import React from 'react';
import IconButton from 'material-ui/IconButton';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const PaginationArrow = ({ onClick, disabled, left, right }) => {
    return (
        <IconButton touch={true} onClick={onClick} disabled={disabled}>
            {left && <ChevronLeft />}
            {right && <ChevronRight />}
        </IconButton>
    );
};

export default PaginationArrow;
