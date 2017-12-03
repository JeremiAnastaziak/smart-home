import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import { toggleSideBar } from '../../actions/dashboard-actions';
import { filterHandle } from '../../actions/dashboard-actions';

const mapStateToProps = ({ dashboard }) => {
    return {
        open: dashboard.showSidebar
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeSideBar: () => dispatch(toggleSideBar()),
        filterHandle: name => dispatch(filterHandle(name))
    };
};

class SideBar extends Component {
    onHandleClick = handle => {
        this.props.filterHandle(handle);
        this.props.closeSideBar();
    };

    render() {
        return (
            <Drawer
                open={this.props.open}
                docked={false}
                onRequestChange={this.props.closeSideBar}
            >
                {this.props.handles &&
                    this.props.handles.map(handle => (
                        <MenuItem onClick={() => this.onHandleClick(handle.name)}>
                            {handle.name}
                        </MenuItem>
                    ))}
            </Drawer>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
