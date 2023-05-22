import {Component} from 'react';
import Input from './Input';
import '../styles/Section.css'

class InputSection extends Component {
    render() {
        return (
            <section className='input-group'>
                <h2 className='input-group_heading'>{this.props.heading}</h2>
                {this.props.inputArray.map(input => {
                    return (
                        <div key={input.id} className="input-group_container">
                            {Object.entries(input).map(([key, value]) => {
                                if (key !== 'id') {
                                    return (
                                        <Input
                                            elementId={`input-${key}`}
                                            property={key}
                                            type={key === 'description' ? 'textarea' : 'text'}
                                            placeholder={key}
                                            id={input.id}
                                            key={key+input.id}
                                            name={key}
                                            value={value}
                                            handleChange={this.props.handleChange}
                                        />
                                    )

                                } else {
                                    return '';
                                }
                            })}
                            {this.props.iterable ? 
                            <button 
                                onClick={(e) => this.props.deleteInputs(e, input.id)}
                                className='btn btn-delete'
                            >
                                Delete
                            </button> 
                            : ''}
                        </div>
                    )
                })}
                {this.props.iterable ? 
                    <button 
                        onClick={this.props.addInputs}
                        className='btn btn-add'
                    >
                            Add
                    </button>
                    :''}
            </section>
        )
    }
}

export default InputSection;