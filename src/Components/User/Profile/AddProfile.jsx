import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faHackerrank, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import CodingProfileForm from './CodingProfileForm';

const AddProfile = () => {
    const [hoveredProfile, setHoveredProfile] = useState(null);
    const [editModeProfile, setEditModeProfile] = useState(null); // Add state to track which profile's edit mode is active

    const handleMouseEnter = (id) => {
        setHoveredProfile(id);
    };

    const handleMouseLeave = () => {
        setHoveredProfile(null);
    };

    const handleClickEdit = (id) => {
        setEditModeProfile(id); // Set edit mode for the clicked profile
    };

    const handleCancelEdit = () => {
        setEditModeProfile(null); // Cancel edit mode for the active profile
    };

    const profileLink = [{
        id: 'updateCodingProfile',
        name: 'Coding Profile',
        noOfLinks: 4,
        data: [{
            Icon: faGithub,
            Name: 'Github',
            Link: 'https://leetcode.com/abhijeetkumar2532002/'
        }, {
            Icon: faLinkedin,
            Name: 'Linkedin',
            Link: 'https://leetcode.com/abhijeetkumar2532002/'
        }, {
            Icon: faHackerrank,
            Name: 'Hackerrank',
            Link: 'https://leetcode.com/abhijeetkumar2532002/'
        }, {
            Icon: faStackOverflow,
            Name: 'StackOverflow',
            Link: 'https://leetcode.com/abhijeetkumar2532002/'
        }]
    }, {
        id: 'updateProjectProfile',
        name: 'Project Profile',
        noOfLinks: 2,
        data: [{
            Icon: faLinkedin,
            Name: 'Linkedin',
            Link: 'https://leetcode.com/abhijeetkumar2532002/'
        }, {
            Icon: faHackerrank,
            Name: 'Hackerrank',
            Link: 'https://leetcode.com/abhijeetkumar2532002/'
        }]
    }, {
        id: 'updateJobProfile',
        name: 'Job Profile',
        noOfLinks: 1,
        data: [{
            Icon: faLinkedin,
            Name: 'Linkedin',
            Link: 'https://leetcode.com/abhijeetkumar2532002/'
        }]
    }]

    return (
        <>
            {profileLink.map((profile) => (
                <div
                    key={profile.id}
                    onMouseEnter={() => handleMouseEnter(profile.id)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="profileDataArea">
                        <p className="mt-3 fs-5 d-flex justify-content-between mx-1 mb-1">
                            <span>{profile.name}</span>
                            {hoveredProfile === profile.id && editModeProfile !== profile.id && (
                                <button type="button" className="border border-0 bg-transparent" onClick={() => handleClickEdit(profile.id)}>
                                    <FontAwesomeIcon icon={faPencil} className="fa-solid" />
                                </button>
                            )}
                            {editModeProfile === profile.id && (
                                <button type="button" className="border border-0 bg-transparent" onClick={handleCancelEdit}>
                                    Cancel
                                </button>
                            )}
                        </p>

                        <div className="row row-cols-1 row-cols-md-2 g-2 border border-2 border-top-0 border-start-0 border-end-0 pb-1 mx-1">
                            {profile.data.map((profileData, index) => (
                                <div className="col" key={index}>
                                    <div className="card h-100 border border-0">
                                        <div className="row">
                                            <div className="col-2">
                                                <div className="d-flex flex-row align-items-center justify-content-end h-100">
                                                    <FontAwesomeIcon icon={profileData.Icon} className="fa-brands" style={{ width: '30px', height: '30px' }} />
                                                </div>
                                            </div>
                                            <div className="col-10 d-flex flex-column g-0">
                                                <span className="text-muted fw-bold text-uppercase">{profileData.Name}</span>
                                                {/* Removed readOnly attribute */}
                                                <input className="text-danger border border-0 bg-transparent" type="text" value={profileData.Link} placeholder='Coding Link' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default AddProfile;
