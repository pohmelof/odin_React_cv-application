import React, {useState} from "react";
import uniqid from "uniqid";
import Form from "./Form";
import Preview from "./Preview";

function App() {
    const [personalDetails, setPersonalDetails] = useState([{
        id: uniqid(),
        name: 'John Doe',
        position: 'Hardware enthusiast',
        phone: '1234 786 34 22',
        email: 'doeOrDoent@not.real',
        address: 'New York, USA',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas ipsam, culpa sit nihil architecto nemo aliquid doloribus optio dolorem. Repellat eius velit blanditiis placeat aliquid at consectetur reiciendis rem commodi, unde soluta, dolorum et asperiores quos doloremque fugit. Esse ipsum impedit consectetur dolorem fugit fuga veniam cum eius, repudiandae quidem dolor, est earum obcaecati placeat eos dolores illo debitis quos? Veniam sequi blanditiis sapiente at, voluptatum, dolorum ut illum ratione a, ipsa voluptas porro earum laudantium tenetur maiores consequuntur.'
    }])

    const [workExperience, setWorkExperience] = useState([
        {
            id: uniqid(),
            companyName: 'Placeholder Industries',
            companyPosition: 'Lorem ipsum typer',
            startDate: '2012',
            endDate: '2014',
            description: 'Nothing here yet, and no plans to add anything. Please be exited.'
        }
    ])

    const [education, setEducation] = useState([
        {
            id: uniqid(),
            courseName: 'Touch typing for kindergarteners',
            courseProvider: 'Prinston University',
            startDate: '2011',
            endDate: '2012',
            description: 'none so far'
        }
    ])

    const [preview, setPreview] = useState(false)

    const handleChange = (property, value) => {
        setPersonalDetails(prevState => {
            return {
                ...prevState,
                [property]: value
            }
        });
    };

    const handleWorkExpChange = (property, value, id) => {
        setWorkExperience((prevState) => {
            return {
                ...prevState.map(item => item.id === id ? {...item, [property]: value} : item)
            }
        })
    };

    const addWorkExp = (e) => {
        e.preventDefault();
        setWorkExperience((prevState) => {
            return [...prevState,
                {
                    id: uniqid(),
                    companyName: '',
                    companyPosition: '',
                    startDate: '',
                    endDate: '',
                    description: ''
                }]

            }
        )
    }

    const deleteWorkExp = (e, id) => {
        e.preventDefault();
        setWorkExperience((prevState) => {
            return [...prevState.workExperience.filter(item => item.id !== id)]   
        })
    }

    const handleEduChange = (property, value, id) => {
        setEducation((prevState) => {
            return [...prevState.map(item => item.id === id ? {...item, [property]: value} : item)]  
        })
    }
    const addEducation = (e) => {
        e.preventDefault();
        setEducation((prevState) => {
            return [...prevState,
                {
                    id: uniqid(),
                    courseName: '',
                    courseProvider: '',
                    startDate: '',
                    endDate: '',
                    description: ''
                }
            ]   
        })
    }
    const deleteEducation = (e, id) => {
        e.preventDefault();
        setEducation((prevState) => {
            return [...prevState.education.filter(item => item.id !== id)]
        })
    }
    const togglePreview = () => {
        setPreview((prevState) => {
            return !prevState
        })
    }


    return (
        <div>
            <button
                className="btn btn-toggle"
                onClick={togglePreview}
            >
                See {preview ? "form":"preview"}
            </button>
            {preview ? 
                <Preview
                    personalDetails={personalDetails}
                    workExperience={workExperience}
                    education={education}
                />
            :
                <Form
                    personalDetails={personalDetails}
                    workExperience={workExperience}
                    education={education}
                    handleChange={handleChange}
                    handleWorkExpChange={handleWorkExpChange}
                    handleEduChange={handleEduChange}
                    addEducation={addEducation}
                    addWorkExp={addWorkExp}
                    deleteWorkExp={deleteWorkExp}
                    deleteEducation={deleteEducation}
                >
                </Form>
            }
        </div>
    )
}


export default App