import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
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
import './index.css';

class NavigationBottom extends Component {
    state = {
        selectedIndex: 0
    };

    select = index => this.setState({ selectedIndex: index });

    render() {
        return (
            <Paper
                className={classNames({
                    'bottom-nav': true,
                    'bottom-nav-bottom': this.props.fixedBottom,
                    'bottom-nav-side': !this.props.fixedBottom
                })}
                zDepth={1}
                style={
                    this.props.fixedBottom && {
                        position: 'fixed',
                        bottom: '0',
                        zIndex: 999
                    }
                }
            >
                <BottomNavigation
                    selectedIndex={this.state.selectedIndex}
                >
                    <Link to="/">
                        <BottomNavigationItem
                            style={{ height: '56px' }}
                            label="Ostatnie"
                            icon={<IconHome />}
                            onClick={() => this.select(0)}
                            selected={this.state.selectedIndex === 0}
                        />
                    </Link>
                    <Link to="/graphs">
                        <BottomNavigationItem
                            style={{ height: '56px' }}
                            label="Wykresy"
                            icon={<IconGraphs />}
                            onClick={() => this.select(1)}
                            selected={this.state.selectedIndex === 1}
                        />
                    </Link>
                    <Link to="/measurements">
                        <BottomNavigationItem
                            style={{ height: '56px' }}
                            label="Pomiary"
                            icon={<IconTable />}
                            onClick={() => this.select(2)}
                            selected={this.state.selectedIndex === 2}
                        />
                    </Link>
                    <Link to="/devices">
                        <BottomNavigationItem
                            label="Urządzenia"
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
