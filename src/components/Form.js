import InputSection from "./InputSection";

function Form(props) {
    return (
        <form>
            <InputSection
                heading='Personal Information'
                inputArray={props.personalDetails}
                handleChange={props.handleChange}
            >
            </InputSection>
            <InputSection
                heading="Work experience"
                iterable={true}
                inputArray={props.workExperience}
                handleChange={props.handleWorkExpChange}
                addInputs={props.addWorkExp}
                deleteInputs={props.deleteWorkExp}
            >
            </InputSection>
            <InputSection
                heading="Education"
                iterable={true}
                inputArray={props.education}
                handleChange={props.handleEduChange}
                addInputs={props.addEducation}
                deleteInputs={props.deleteEducation}
            >
            </InputSection>
        </form>
    )
}


export default Form;