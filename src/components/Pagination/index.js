import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import PaginationArrow from './PaginationArrow';

class Pagination extends React.Component {
    pageChangePrevious = () => {
        this.props.onChangeCurrentPage(this.props.activePage - 1);
    };

    pageChangeNext = () => {
        this.props.onChangeCurrentPage(this.props.activePage + 1);
    };

    onChangeInputText = ({ target }) => {
        if (target.value > this.props.totalPages) this.props.onChangeCurrentPage(this.props.totalPages);
        else if (target.value < 1) this.props.onChangeCurrentPage(1);
        else this.props.onChangeCurrentPage(Number(target.value));

        this.input.focus();
    };

    onLastPageButtonClick = () => {
        this.props.onChangeCurrentPage(this.props.totalPages);
    };

    render() {
        const { activePage, totalPages } = this.props;
        if (!totalPages) return '';
        return (
            <div
                className="pagination"
                style={{
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <PaginationArrow onClick={this.pageChangePrevious} disabled={activePage <= 1} left/>
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
                {'z'}
                <FlatButton
                    label={totalPages}
                    primary={true}
                    labelStyle={{ fontSize: '23px', padding: 0 }}
                    style={{ minWidth: '40px', marginLeft: '10px' }}
                    onClick={this.onLastPageButtonClick}
                />
                <PaginationArrow onClick={this.pageChangeNext} right disabled={activePage === totalPages}/>
            </div>
        );
    }
}

export default Pagination;
