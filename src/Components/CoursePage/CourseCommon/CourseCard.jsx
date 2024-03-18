import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const CourseCard = ({ courseData }) => {
    return (
        <>
            <div className="col">
                <div className="card mb-3 h-100">
                    <img src={courseData?.courseImage} className="card-img-top" alt="..." />
                    <div className='px-3' style={{width:"100% !important"}}><h3>{courseData.name}</h3></div>
                    <div className="card-body pb-0 mb-0" >
                        <h6 className="card-title d-flex justify-content-between align-items-center">
                            
                            <span className="text-muted">{courseData?.description}</span>                         
                        </h6>
                        <FontAwesomeIcon icon={faCalendar} />&nbsp;&nbsp;<span className="card-text h6">Duration {courseData.duration} months</span>

                        <h6 className="card-title d-flex align-items-center mb-0 pb-0">
                            <i className="bi bi-bar-chart-line-fill pe-2"></i><span className="text-muted text-center"> Beginner to Advance</span>
                        </h6>
                    </div>

                    <div className="card-footer bg-transparent border-0 mt-0 pt-0">
                        <h5 className="card-title d-flex justify-content-between align-items-center m-0 p-0">
                            <span>₹{courseData.sellPrice} &nbsp;
                                <del className="text-muted"> ₹{courseData.marketPrice}</del>
                            </span>

                            <Link to="/ninja/CourseDetail" className="btn btn-outline-success px-3 py-1">Explore</Link>
                        </h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseCard