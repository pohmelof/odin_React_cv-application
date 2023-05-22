import { Component } from "react";

class Input extends Component {
    render() {
        return (
        <label htmlFor={this.props.elementId}>
            {this.props.type !== 'textarea' ? 
                <input
                    type={this.props.type}
                    key={this.props.id}
                    id={this.props.elementId}
                    name={this.props.elementId}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={(e) => this.props.handleChange(this.props.property, e.target.value, this.props.id)}
                /> 
                : 
                <textarea
                    rows={5}
                    id={this.props.elementId}
                    key={this.props.id}
                    name={this.props.elementId}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={(e) => this.props.handleChange(this.props.property, e.target.value, this.props.id)}
                />
            }  
        </label>
        )
    }
}

export default Input