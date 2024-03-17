import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const UserJobPrefrence = () => {
    return (
        <div>
            <div class="card border border-dark border-2 rounded rounded-lg my-3">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <h4>Job Preferences</h4>
                        <button type="button" class="btn btn-outline-dark fw-bolder">
                            <FontAwesomeIcon icon={faPlus} /> Add
                        </button>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center mx-md-5 px-md-5 ">
                        <img src="/Image/UserImage/JobPrefrence.svg" alt="JobPrefrence.svg" style={{ width: '150px' }} />
                        <span class="fs-5 text-center">Add your job preferences here to view your preferred job in placement cell</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserJobPrefrence