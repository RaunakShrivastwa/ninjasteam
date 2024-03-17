import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faHackerrank, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import CodingProfileForm from './CodingProfileForm';

const AddProfile = () => {
    const [editModeProfile, setEditModeProfile] = useState(null);
    const [editable, setEditable] = useState(false);
    const [inputStyle, setInputStyle] = useState({ border: 'none' }); // State to manage input field style

    var initialProfileLink = [{
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
    }];

    const [profileLink, setProfileLink] = useState(initialProfileLink);

    const handleLinkChange = (profileIndex, linkIndex, newLink) => {
        const updatedLinks = [...profileLink];
        updatedLinks[profileIndex].data[linkIndex].Link = newLink;
        setProfileLink(updatedLinks);
    };

    const handleSubmit = () => {
        // Here you can submit the updated links to your API
        console.log('Updated links:', profileLink);
        setEditModeProfile(null);
        setEditable(false);
    };

    const handleFocus = () => {
        setInputStyle({ border: 'none' }); // Update input style on focus
    };

    return (
        <>
            {profileLink.map((profile, profileIndex) => (
                <div key={profile.id} class="border border-2 border-top-0 border-start-0 border-end-0">
                    <p className="mt-3 fs-5 d-flex justify-content-between mx-1 mb-1">
                        <span>{profile.name}</span>
                        {editModeProfile !== profile.id && (
                            <button type="button" className="border border-0 bg-transparent" onClick={() => setEditModeProfile(profile.id)}>
                                <FontAwesomeIcon icon={faPencil} className="fa-solid" />
                            </button>
                        )}
                    </p>
                    <div className="row row-cols-1 row-cols-md-2 g-2 pb-1 mx-1">
                        {
                            profile.data.map((link, linkIndex) => (
                                <div className="col" key={linkIndex}>
                                    <div className="card h-100 border border-0">
                                        <div className="row">
                                            <div className="col-2">
                                                <div className="d-flex flex-row align-items-center justify-content-end h-100">
                                                    <FontAwesomeIcon icon={link.Icon} className="fa-brands" style={{ width: '30px', height: '30px' }} />
                                                </div>
                                            </div>
                                            <div className="col-10 d-flex flex-column g-0">
                                                <span className="text-muted fw-bold text-uppercase">{link.Name}</span>
                                                {editModeProfile !== profile.id && (
                                                    <input
                                                        id={`${profile.id}-${linkIndex}`}
                                                        className={'text-danger border border-0 bg-transparent outline-none shadow-none '}
                                                        type="text"
                                                        value={link.Link}
                                                        readOnly={!editable}
                                                        style={inputStyle} // Apply input style
                                                        onFocus={handleFocus} // Handle focus event
                                                    />
                                                )}
                                                {editModeProfile === profile.id && (
                                                    <input
                                                        id={`${profile.id}-${linkIndex}`}
                                                        onChange={(e) => handleLinkChange(profileIndex, linkIndex, e.target.value)}
                                                        className={'text-danger border border-0 bg-transparent outline-none shadow-none '}
                                                        type="text"
                                                        value={link.Link}
                                                        placeholder='Coding Link'
                                                        style={inputStyle} // Apply input style
                                                        onFocus={handleFocus} // Handle focus event
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {editModeProfile === profile.id && (
                        <div class="my-2">
                            <button type="button" className="btn border border-0 bg-success" onClick={handleSubmit}>Submit</button>
                            <button type="button" className="btn border border-0 bg-danger ms-2" onClick={() => setEditModeProfile(null)}>Cancel</button>
                        </div>
                    )}
                </div>
            ))}
        </>
    );
}

export default AddProfile;
