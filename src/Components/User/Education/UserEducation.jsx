import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import AddUserEducation from './AddUserEducation';

const UserEducation = () => {
    const [showAddForm, setShowAddForm] = useState(false);

    const toggleAddForm = () => {
        setShowAddForm(!showAddForm);
    };

    const handleCancel = () => {
        setShowAddForm(false);
    };

    var education = [
        {
            collegeName: "Babasaheb Bhimrao Ambedkar Bihar University",
            course: 'BCA',
            grade: '82.48%',
            startYear: 2019,
            endYear: 2023
        }, {
            collegeName: "Babasaheb Bhimrao Ambedkar Bihar University",
            course: 'MCA',
            grade: '82.48%',
            startYear: 2023,
            endYear: 2025
        }
    ];

    return (
        <div className="card border border-dark border-2 rounded rounded-lg my-3">
            <div className="card-body">
                <div className="d-flex justify-content-between mb-3">
                    <h4>Education</h4>
                    <button type="button" className="btn btn-outline-dark fw-bolder" onClick={toggleAddForm}>
                        <FontAwesomeIcon icon={faPlus} /> Add
                    </button>
                </div>

                {showAddForm && <AddUserEducation onCancel={handleCancel} />}
                {education.length === 0 ? (
                    <div className="d-flex flex-column justify-content-center align-items-center mx-md-5 px-md-5 ">
                        <img src="/Image/UserImage/WorkExperience.svg" alt="WorkExperience.svg" style={{ width: '300px' }} />
                        <span className="fs-5">Write about your accomplishments at work</span>
                    </div>
                ) : (
                    education.map((edu, index) => (
                        <div key={index}>
                            <div className="d-flex flex-column justify-content-center align-items-start5">
                                <div class="d-flex justify-content-between">
                                    <div className="h5 fw-normal">{edu.collegeName}</div>
                                    <button type="button" class="btn btn-transparent p-1">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </div>
                                <p className="fs-5 my-0 py-0">
                                    <span>{edu.course}</span>
                                    <span className="ms-2 text-danger">{edu.grade}</span>
                                </p>
                                <p className="fs-5 my-0 py-0">
                                    <span>{edu.startYear}</span>
                                    <span>-</span>
                                    <span>{edu.endYear}</span>
                                </p>
                            </div>
                            {index < education.length - 1 && <hr />}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default UserEducation;
