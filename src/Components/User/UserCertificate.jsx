import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const UserCertificate = () => {
    return (
        <div>
            <div class="card border border-dark border-2 rounded rounded-lg my-3">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <h4>Certificates</h4>
                        <button type="button" class="btn btn-outline-dark fw-bolder">
                            <FontAwesomeIcon icon={faPlus} /> Add
                        </button>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center mx-md-5 px-md-5 ">
                        <img src="/Image/UserImage/WorkExperience.svg" alt="WorkExperience.svg" style={{ width: '300px' }} />
                        <span class="fs-5">Write about your accomplishments at work</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCertificate