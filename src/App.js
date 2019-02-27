import React, { Component } from "react";
import "./App.css";

class App extends Component {
    state = {
        current: ""
    }

    handleClick = value => {
        const { current } = this.state
        const newValue = current.length < 9 ? String(current) + String(value) : current
        this.setState({
            current: newValue
        })
    }

    handleOperator = value => {
        this.setState({
            operator: value
        })
    }

    render() {
        const { current } = this.state
        return (
            <div id="calculator">
                <div className="top">
                    <span className="clear">C</span>
                    <div className="screen">{current}</div>
                </div>
                <div className="keys">
                    <span id={7} onClick={(e) => this.handleClick(e.target.id)}>7</span>
                    <span id={8} onClick={(e) => this.handleClick(e.target.id)}>8</span>
                    <span id={9} onClick={(e) => this.handleClick(e.target.id)}>9</span>
                    <span id='+' onClick={(e) => this.handleOperator(e.target.id)} className="operator">+</span>
                    <span id={4} onClick={(e) => this.handleClick(e.target.id)}>4</span>
                    <span id={5} onClick={(e) => this.handleClick(e.target.id)}>5</span>
                    <span id={6} onClick={(e) => this.handleClick(e.target.id)}>6</span>
                    <span id='-' onClick={(e) => this.handleOperator(e.target.id)} className="operator">-</span>
                    <span id={1} onClick={(e) => this.handleClick(e.target.id)}>1</span>
                    <span id={2} onClick={(e) => this.handleClick(e.target.id)}>2</span>
                    <span id={3} onClick={(e) => this.handleClick(e.target.id)}>3</span>
                    <span id='/' onClick={(e) => this.handleOperator(e.target.id)} className="operator">÷</span>
                    <span id={0} onClick={(e) => this.handleClick(e.target.id)}>0</span>
                    <span id='.' onClick={(e) => this.handleClick(e.target.id)}>.</span>
                    <span id='=' onClick={(e) => this.handleOperator(e.target.id)} className="eval">=</span>
                    <span id='x' onClick={(e) => this.handleOperator(e.target.id)} className="operator">x</span>
                </div>
            </div>

        );
    }
}


export default App;
