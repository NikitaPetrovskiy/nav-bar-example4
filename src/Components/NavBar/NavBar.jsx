import React from 'react';

export class NavBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            initialActiveItem: this.props.initialActiveItem
        }
        this.handleClick = this.handleClick.bind(this);
    }

     handleClick = (event) => {
        this.setState({initialActiveItem: event.target.text});
    }
    render() {
        return (
            <div className={this.props.clsName} onClick={this.handleClick}>
                {this.props.items.map((item, index) => (
                    <a key={index} href="#"
                       className={this.state.initialActiveItem === item ? 'active' : null}>{item}</a>))}
            </div>
        )
    }
}