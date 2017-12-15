import React from 'react';
import Drawer from 'material-ui/Drawer';
import { connect } from 'react-redux';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const mapStateToProps = ({ dashboard }) => {
    devices: dashboard.handles;
};

class HeaderSelect extends React.Component{
    constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <RaisedButton
          label="Toggle Drawer"
          onClick={this.handleToggle}
        />
        <Drawer open={this.state.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
};

export default connect(mapStateToProps)(HeaderSelect);
