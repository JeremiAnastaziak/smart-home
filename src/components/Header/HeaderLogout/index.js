import React from 'react';
import { connect } from 'react-redux';
import { submitLogoutUser } from '../../../actions/user-actions';
import IconUser from 'material-ui/svg-icons/action/cached';
import IconButton from 'material-ui/IconButton';

const mapDispatchToProps = (dispatch) => {
    return {
        submitLogoutUser: () => dispatch(submitLogoutUser())
    }
}
class HeaderLogout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dialog: false
        }
    }
    render() {
        return (
            <IconButton onClick={() => this.props.submitLogoutUser()}><IconUser color="#fff"/></IconButton>
        )
    }
}

export default connect(null, mapDispatchToProps)(HeaderLogout);
