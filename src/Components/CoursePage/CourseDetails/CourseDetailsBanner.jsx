import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faUsers, faUserTie } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const CourseDetailsBanner = () => {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 g-2 my-5 pt-2">
                <div className="col">
                    <div className="card h-100 border border-0">
                        <div className="card-body d-flex align-items-center border border-0">
                            <div className="row">
                                <h1 className="card-title fw-bolder display-6">DSA to Development: A Complete Guide</h1>
                                <p class="fw-bold">
                                    <span><FontAwesomeIcon icon={faUsers} className="rounded rounded-circle" size="lg" /> 1:1 Mock Interview</span> 
                                    <span class="ms-3"><FontAwesomeIcon icon={faUserTie} className="rounded rounded-circle" size="lg"/> Master Classes with Industry Experts</span>
                                </p>

                                <p className="h6 text-success">Recommended for Students and Working Professionals</p>

                                <div className="btn-group mb-1 mt-4">
                                    <button type="button" className="btn me-md-3 rounded rounded-lg fw-bold" style={{ background: '#2f8d46' }}>Sign-Up Now</button>
                                    <button type="button" className="btn btn-outline-warning px-1 rounded rounded-lg fw-bold ">Download Brochure
                                        <FontAwesomeIcon icon={faDownload} size="lg" className="ms-2" />
                                    </button>
                                </div>
                                <span>Fill out the form to increase your chances of getting shortlisted</span>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border border-0">
                        <div className="card-body">
                            <img src="/Image/DSA.png" alt="Course Image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseDetailsBanner;
