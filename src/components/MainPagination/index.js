import Pagination from '../Pagination';
import { connect } from 'react-redux';
import { changeCurrentPage } from '../../actions/dashboard-actions.js';

const mapStateToProps = ({ dashboard }) => {
    return {
        ...dashboard,
        totalPages: Math.ceil(dashboard.records.total / 5)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeCurrentPage: (page) => {
            dispatch(changeCurrentPage(page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
