import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import AddUserWorkExperse from './AddUserWorkExperse';

const WorkExperience = () => {
    const [showAddForm, setShowAddForm] = useState(false);

    const toggleAddForm = () => {
        setShowAddForm(!showAddForm);
    };

    const handleCancel = () => {
        setShowAddForm(false);
    };

    var workExprense = [
        {
            orginasiationName: "Infotech",
            profile: 'Backend Developer',
            joiningDate: 2023,
            endingDate: 2024,
            techStack: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente velit, laboriosam unde sequi incidunt cum possimus reprehenderit error temporibus minus.'
        }, {
            orginasiationName: "TCS",
            profile: 'Frontend Developer',
            joiningDate: 2022,
            endingDate: 2024,
            techStack: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut iste assumenda blanditiis minima repellendus omnis sit eos veritatis'
        }
    ];

    return (
        <div class="card border border-dark border-2 rounded rounded-lg my-3">
            <div class="card-body">
                <div class="d-flex justify-content-between mb-3">
                    <h4>Work Experience</h4>
                    <button type="button" class="btn btn-outline-dark fw-bolder" onClick={toggleAddForm}>
                        <FontAwesomeIcon icon={faPlus} /> Add
                    </button>
                </div>

                {showAddForm && <AddUserWorkExperse onCancel={handleCancel} />}
                {workExprense.length === 0 ? (
                    <div className="d-flex flex-column justify-content-center align-items-center mx-md-5 px-md-5 ">
                        <img src="/Image/UserImage/WorkExperience.svg" alt="WorkExperience.svg" style={{ width: '300px' }} />
                        <span className="fs-5">Write about your accomplishments at work</span>
                    </div>
                ) : (
                    workExprense.map((work, index) => (
                        <div key={index}>
                            <div className="d-flex flex-column justify-content-center align-items-start5">
                                <div class="d-flex justify-content-between">
                                    <div className="fw-normal">
                                        <span class="h5 me-2 my-0">{work.orginasiationName}</span>
                                        (<span>{work.profile}</span>)
                                    </div>
                                    <button type="button" class="btn btn-transparent p-1">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </div>
                                <p className="fs-5 my-0 py-0">
                                    <span>{work.joiningDate}</span>
                                    <span>-</span>
                                    <span>{work.endingDate}</span>
                                </p>
                                <p className="fs-5 my-0 py-0">
                                    <span class="bg-warning rounded rounded-lg">{work.techStack} </span>
                                </p>
                            </div>
                            {index < (workExprense.length - 1) && <hr />}
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default WorkExperience