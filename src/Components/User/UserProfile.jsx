import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import UserAbout from './UserAbout';


const UserProfile = () => {
    return (
        <div class="container mt-5 py-5">
            <div class="d-flex justify-content-end mb-3">
                <button type="button" class="btn btn-outline-primary px-3rounded rounded-pill fw-bolder px-4 border border-2 border-primary">
                    <FontAwesomeIcon icon={faFileArrowDown} class="pe-1" style={{ width: '20px' }} />Download
                </button>
            </div>
            <UserAbout />
        </div>
    )
}

export default UserProfile