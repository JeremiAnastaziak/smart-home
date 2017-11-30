import React from 'react';
import IconButton from 'material-ui/IconButton';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class Pagination extends React.Component {

    onChangeCurrentPagePrevious = () => {
        this.props.onChangeCurrentPage(this.props.activePage - 1);
    }

    onChangeCurrentPageNext = () => {
        this.props.onChangeCurrentPage(this.props.activePage + 1);
    }

    onChangeInputText = ({target}) => {
        if (target.value > this.props.totalPages) this.props.onChangeCurrentPage(10);
        else if (target.value < 1) this.props.onChangeCurrentPage(1);
        else this.props.onChangeCurrentPage(Number(target.value));

        this.input.focus();
    }

    onLastPageButtonClick = () => {
        this.props.onChangeCurrentPage(this.props.totalPages);
    }

    render() {
        const { activePage, totalPages } = this.props;
        return (
            <div style={{ display: 'flex', alignItems: 'center', minWidth: '250px', justifyContent: 'flex-end' }}>
                {activePage > 1 && (
                    <IconButton touch={true} onClick={this.onChangeCurrentPagePrevious}>
                        <ChevronLeft />
                    </IconButton>
                )}
                <TextField
                    name="page"
                    type="number"
                    style={{ maxWidth: '50px', marginRight: '15px', height: '40px' }}
                    inputStyle={{ background: '#fff', textAlign: 'center' }}
                    underlineShow={false}
                    onChange={this.onChangeInputText}
                    key={new Date().now}
                    ref={node => {
                        this.input = node;
                    }}
                    onClick={() => this.input.select()}
                    value={activePage}
                />
                {'from'}
                <FlatButton
                    label={totalPages}
                    primary={true}
                    labelStyle={{ fontSize: '23px', padding: 0 }}
                    style={{ minWidth: '40px', marginLeft: '10px' }}
                    onClick={this.onLastPageButtonClick}
                />
                {activePage < totalPages && (
                    <IconButton touch={true} onClick={this.onChangeCurrentPageNext}>
                        <ChevronRight />
                    </IconButton>
                )}
            </div>
        );
    }
}

export default Pagination;
