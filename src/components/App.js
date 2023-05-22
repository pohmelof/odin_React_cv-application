import React, {Component} from "react";
import uniqid from "uniqid";
import Form from "./Form";
import Preview from "./Preview";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personalDetails: [{
                id: uniqid(),
                name: 'John Doe',
                position: 'Hardware enthusiast',
                phone: '1234 786 34 22',
                email: 'doeOrDoent@not.real',
                address: 'New York, USA',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas ipsam, culpa sit nihil architecto nemo aliquid doloribus optio dolorem. Repellat eius velit blanditiis placeat aliquid at consectetur reiciendis rem commodi, unde soluta, dolorum et asperiores quos doloremque fugit. Esse ipsum impedit consectetur dolorem fugit fuga veniam cum eius, repudiandae quidem dolor, est earum obcaecati placeat eos dolores illo debitis quos? Veniam sequi blanditiis sapiente at, voluptatum, dolorum ut illum ratione a, ipsa voluptas porro earum laudantium tenetur maiores consequuntur.'
            }],
            workExperience: [
                {
                    id: uniqid(),
                    companyName: 'Placeholder Industries',
                    companyPosition: 'Lorem ipsum typer',
                    startDate: '2012',
                    endDate: '2014',
                    description: 'Nothing here yet, and no plans to add anything. Please be exited.'
                }
            ],
            education: [
                {
                    id: uniqid(),
                    courseName: 'Touch typing for kindergarteners',
                    courseProvider: 'Prinston University',
                    startDate: '2011',
                    endDate: '2012',
                    description: 'none so far'
                }
            ],
            preview: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleWorkExpChange = this.handleWorkExpChange.bind(this);
        this.addWorkExp = this.addWorkExp.bind(this);
        this.handleEduChange = this.handleEduChange.bind(this);
        this.addEducation = this.addEducation.bind(this);
        this.deleteWorkExp = this.deleteWorkExp.bind(this);
        this.deleteEducation = this.deleteEducation.bind(this);
        this.togglePreview = this.togglePreview.bind(this);
    }

    handleChange(property, value) {
        this.setState(prevState => {
            return {
                ...prevState,
                personalDetails: [{
                    ...prevState.personalDetails[0],
                    [property]: value
            }]
            }
        });
    };
    
    handleWorkExpChange(property, value, id) {
        this.setState((prevState) => {
            return {
                ...prevState,
                workExperience: prevState.workExperience.map(item => item.id === id ? {...item, [property]: value} : item)
            }
        })
    }
    addWorkExp(e) {
        e.preventDefault();
        this.setState((prevState) => {
            return {
                ...prevState,
                workExperience: [
                    ...prevState.workExperience,
                    {
                        id: uniqid(),
                        companyName: '',
                        companyPosition: '',
                        startDate: '',
                        endDate: '',
                        description: ''
                    }
                ]

            }
        })
    }
    deleteWorkExp(e, id) {
        e.preventDefault();
        this.setState((prevState) => {
            return {
                ...prevState,
                workExperience: [
                    ...prevState.workExperience.filter(item => item.id !== id)
                ]
            }
        })
    }

    handleEduChange(property, value, id) {
        this.setState((prevState) => {
            return {
                ...prevState,
                education: prevState.education.map(item => item.id === id ? {...item, [property]: value} : item)
            }
        })
    }
    addEducation(e) {
        e.preventDefault();
        this.setState((prevState) => {
            return {
                ...prevState,
                education: [
                    ...prevState.education,
                    {
                        id: uniqid(),
                        courseName: '',
                        courseProvider: '',
                        startDate: '',
                        endDate: '',
                        description: ''
                    }
                ]

            }
        })
    }
    deleteEducation(e, id) {
        e.preventDefault();
        this.setState((prevState) => {
            return {
                ...prevState,
                education: [
                    ...prevState.education.filter(item => item.id !== id)
                ]
            }
        })
    }
    togglePreview() {
        this.setState((prevState) => {
            return {
                ...prevState,
                preview: !prevState.preview
            }
        })
    }

    render() {
        return (
            <div>
                <button
                    className="btn btn-toggle"
                    onClick={this.togglePreview}
                >
                    See {this.state.preview ? "form":"preview"}
                </button>
                {this.state.preview ? 
                    <Preview
                        personalDetails={this.state.personalDetails}
                        workExperience={this.state.workExperience}
                        education={this.state.education}
                    />
                :
                    <Form
                        personalDetails={this.state.personalDetails}
                        workExperience={this.state.workExperience}
                        education={this.state.education}
                        handleChange={this.handleChange}
                        handleWorkExpChange={this.handleWorkExpChange}
                        handleEduChange={this.handleEduChange}
                        addEducation={this.addEducation}
                        addWorkExp={this.addWorkExp}
                        deleteWorkExp={this.deleteWorkExp}
                        deleteEducation={this.deleteEducation}
                    >
                    </Form>
                }
            </div>
        )
    }
}

export default App