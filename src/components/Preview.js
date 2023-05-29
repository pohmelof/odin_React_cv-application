import {Component} from "react";

class Preview extends Component {
    render() {
        return (
        <div className='preview'>
            <h2>Personal Information</h2>
            {this.props.personalDetails.map(item => {
                return (
                    <div className='preview-group personalDetails' key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.position}</p>
                        <p>{item.phone}</p>
                        <p>{item.email}</p>
                        <p>{item.address}</p>
                        <p>{item.description}</p>
                    </div>
                        
                )
            })}
            <h2>Work Experience</h2>
            {this.props.workExperience.map(item => {
                return (
                    <div className="preview-group workExperience" key={item.id}>
                        <h3>{item.companyName}</h3>
                        <p>{item.companyPosition}</p>
                        <p>From {item.startDate}</p>
                        <p>Until {item.endDate}</p>
                        <p>{item.description}</p>
                    </div>
                )
            })}
            <h2>Education</h2>
            {this.props.education.map(item => {
                return (
                    <div className="preview-group education" key={item.id}>
                        <h3>{item.courseName}</h3>
                        <p>At: {item.courseProvider}</p>
                        <p>From {item.startDate}</p>
                        <p>Until {item.endDate}</p>
                        <p>Description: {item.description}</p>
                    </div>
                )
            })}
        </div>

        )
    }
}

export default Preview