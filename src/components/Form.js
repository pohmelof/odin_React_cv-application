import {Component} from "react";
import InputSection from "./InputSection";

class Form extends Component {
    render() {
        return (
            <form>
                <InputSection
                    heading='Personal Information'
                    inputArray={this.props.personalDetails}
                    handleChange={this.props.handleChange}
                >
                </InputSection>
                <InputSection
                    heading="Work experience"
                    iterable={true}
                    inputArray={this.props.workExperience}
                    handleChange={this.props.handleWorkExpChange}
                    addInputs={this.props.addWorkExp}
                    deleteInputs={this.props.deleteWorkExp}
                >
                </InputSection>
                <InputSection
                    heading="Education"
                    iterable={true}
                    inputArray={this.props.education}
                    handleChange={this.props.handleEduChange}
                    addInputs={this.props.addEducation}
                    deleteInputs={this.props.deleteEducation}
                >
                </InputSection>
            </form>
        )
    }
}

export default Form;