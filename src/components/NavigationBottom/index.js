import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontIcon from 'material-ui/FontIcon';
import {
    BottomNavigation,
    BottomNavigationItem
} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import IconDevices from 'material-ui/svg-icons/hardware/developer-board';
import IconGraphs from 'material-ui/svg-icons/action/trending-up';
import IconHome from 'material-ui/svg-icons/action/home';
import IconTable from 'material-ui/svg-icons/action/list';

class NavigationBottom extends Component {
    state = {
        selectedIndex: 0
    };

    select = index => this.setState({ selectedIndex: index });

    render() {
        return (
            <Paper zDepth={1} style={{position: 'fixed', bottom: '0', zIndex: 9999}}>
                <BottomNavigation selectedIndex={this.state.selectedIndex}>
                    <Link to="/">
                        <BottomNavigationItem
                            style={{ height: '56px' }}
                            icon={<IconHome />}
                            onClick={() => this.select(0)}
                            selected={this.state.selectedIndex === 0}
                        />
                    </Link>
                    <Link to="/graphs">
                        <BottomNavigationItem
                            style={{ height: '56px' }}
                            icon={<IconGraphs />}
                            onClick={() => this.select(1)}
                            selected={this.state.selectedIndex === 1}
                        />
                    </Link>
                    <Link to="/table">
                        <BottomNavigationItem
                            style={{ height: '56px' }}
                            icon={<IconTable />}
                            onClick={() => this.select(2)}
                            selected={this.state.selectedIndex === 2}
                        />
                    </Link>
                    <Link to="/devices">
                        <BottomNavigationItem
                            style={{ height: '56px' }}
                            icon={<IconDevices />}
                            onClick={() => this.select(3)}
                            selected={this.state.selectedIndex === 3}
                        />
                    </Link>
                </BottomNavigation>
            </Paper>
        );
    }
}

export default NavigationBottom;
