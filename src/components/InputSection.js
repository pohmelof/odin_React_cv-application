import Input from './Input';
import '../styles/Section.css'

function InputSection(props) {
    return (
        <section className='input-group'>
            <h2 className='input-group_heading'>{props.heading}</h2>
            {props.inputArray.map(input => {
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
                                        handleChange={props.handleChange}
                                    />
                                )

                            } else {
                                return '';
                            }
                        })}
                        {props.iterable ? 
                        <button 
                            onClick={(e) => props.deleteInputs(e, input.id)}
                            className='btn btn-delete'
                        >
                            Delete
                        </button> 
                        : ''}
                    </div>
                )
            })}
            {props.iterable ? 
                <button 
                    onClick={props.addInputs}
                    className='btn btn-add'
                >
                        Add
                </button>
                :''}
        </section>
    )
}


export default InputSection;