// import { Component } from "react";


function Input(props) {
    return (
        <label htmlFor={props.elementId}>
            {props.type !== 'textarea' ? 
                <input
                    type={props.type}
                    key={props.id}
                    id={props.elementId}
                    name={props.elementId}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={(e) => props.handleChange(props.property, e.target.value, props.id)}
                /> 
                : 
                <textarea
                    rows={5}
                    id={props.elementId}
                    key={props.id}
                    name={props.elementId}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={(e) => props.handleChange(props.property, e.target.value, props.id)}
                />
            }  
        </label>
        )
}

// class Input extends Component {
//     render() {
//         return (
//         <label htmlFor={this.props.elementId}>
//             {this.props.type !== 'textarea' ? 
//                 <input
//                     type={this.props.type}
//                     key={this.props.id}
//                     id={this.props.elementId}
//                     name={this.props.elementId}
//                     placeholder={this.props.placeholder}
//                     value={this.props.value}
//                     onChange={(e) => this.props.handleChange(this.props.property, e.target.value, this.props.id)}
//                 /> 
//                 : 
//                 <textarea
//                     rows={5}
//                     id={this.props.elementId}
//                     key={this.props.id}
//                     name={this.props.elementId}
//                     placeholder={this.props.placeholder}
//                     value={this.props.value}
//                     onChange={(e) => this.props.handleChange(this.props.property, e.target.value, this.props.id)}
//                 />
//             }  
//         </label>
//         )
//     }
// }

export default Input