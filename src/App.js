import React, { Component } from 'react';
import NavBar from './components/navbar';
import Screen from './components/screen'
import Calculator from './components/calculator';
import Display from './components/display';
import './App.css';

class App extends Component {
    state = {
        screens: [
            '',
            '',
            '',
            '',
            '',
            ''
        ],
    };

    constructor(props) {
        super(props);
        this.percentOf = this.percentOf.bind(this);
        this.isPercentOf = this.isPercentOf.bind(this);
    }

    percentOf(event) {
        var screens = { ...this.state.screens };
        const id = event.target.id;
        screens[id] = event.target.value;

        const x = Number(screens[0]);
        const y = Number(screens[1]);
        var z = Math.round((x * (y * 0.01)) * 10000000) / 10000000;

        screens[2] = isFinite(z) ? z.toString() : '0';

        this.setState({ screens: screens });
    }

    isPercentOf(event) {
        var screens = { ...this.state.screens };
        const id = event.target.id;
        screens[id] = event.target.value;

        const x = Number(screens[3]);
        const y = Number(screens[4]);
        var z = Math.round((x / y) * 100 * 10000000) / 10000000;

        screens[5] = isFinite(z) ? z.toString() : '0';

        this.setState( { screens: screens });
    }

    render() {
        return (
            <React.Fragment>
                <NavBar
                />
                <Calculator>
                    <Screen value={this.state.screens[0]}
                    id={0}
                    onChange={this.percentOf}
                    />
                    <p className="one-line">percent of</p>
                    <Screen value={this.state.screens[1]}
                    id={1}
                    onChange={this.percentOf}
                    />
                    <p className="one-line eq">=</p>
                    <Display
                    value={this.state.screens[2]}
                    id={2}
                    onChange={this.percentOf}
                    />
                    <Screen value={this.state.screens[3]}
                    id={3}
                    onChange={this.isPercentOf}
                    />
                    <p className="one-line">is what percent of</p>
                    <Screen value={this.state.screens[4]}
                    id={4}
                    onChange={this.isPercentOf}
                    />
                    <p className="one-line eq">=</p>
                    <Display value={this.state.screens[5]}
                    id={5}
                    onChange={this.isPercentOf}
                    />
                </Calculator>
            </React.Fragment>
        );
    }
}

export default App;