import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faUsers, faUserTie } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { urlFunction } from '../../../App.js'
import { useNavigate } from 'react-router-dom';

const CourseDetailsBanner = ({ course }) => {
    const [isEnrolled, setIsEnrolled] = useState(false);
    const [user, setUser] = useState(true);
    const history = useNavigate();

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const yourDataCookie = Cookies.get('yourData');
        const u = yourDataCookie ? JSON.parse(yourDataCookie) : null;
        const user = await axios.get(urlFunction() + `user/fetchUser/${u?.userEmail}`)
        setUser(user.data)
    }

    useEffect(() => {
        if (user && course.student?.length > 0) {
            setIsEnrolled(course.student.includes(user._id));
        }
    }, [user, course.student]);

    const proceed = async () => {
        const yourDataCookie = Cookies.get('yourData');
        if(!yourDataCookie){
            const currentRoute = window.location.pathname;
            Cookies.set('path', JSON.stringify(currentRoute), { expires: 3 });
            history('/ninja/auth/login')
        }
        const body ={
            userEmail:user?.userEmail,
            courseName:course?.name
        }
        console.log("body ",body);
        try{
             await axios.post(urlFunction()+`user/course/assign`,body);
             setIsEnrolled(true)
        }catch(err){
            return console.log("There is Error ",err);
        }
    }
    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 g-2 my-5 pt-2">
                <div className="col">
                    <div className="card h-100 border border-0">
                        <div className="card-body d-flex align-items-center border border-0">
                            <div className="row">
                                <h1 className="card-title fw-bolder display-6"><span>{course?.name}</span> : A Complete Guide</h1>
                                <p class="fw-bold">
                                    <span><FontAwesomeIcon icon={faUsers} className="rounded rounded-circle" size="lg" /> 1:1 Mock Interview</span>
                                    <span class="ms-3"><FontAwesomeIcon icon={faUserTie} className="rounded rounded-circle" size="lg" /> Master Classes with Industry Experts</span>
                                </p>

                                <p className="h6 text-success">Recommended for Students and Working Professionals</p>

                                <div className="btn-group mb-1 mt-4">
                                    {isEnrolled ? (
                                        <button type="button" className="btn me-md-3 rounded rounded-lg fw-bold" style={{ background: '#2f8d46', opacity: '0.5', cursor: 'none' }}>Enrolled</button>
                                    ) : (
                                        <button type="button" onClick={proceed} className="btn me-md-3 rounded rounded-lg fw-bold" style={{ background: '#2f8d46' }}>Sign-Up Now</button>
                                    )}
                                    <a href="https://drive.google.com/file/d/1dCr0eTQzbunpT62dr9NpGjekNW_1rTJt/view?usp=sharing">
                                        <button type="button" className="btn btn-outline-warning px-1 rounded rounded-lg fw-bold ">Download Brochure
                                            <FontAwesomeIcon icon={faDownload} size="lg" className="ms-2" />
                                        </button>
                                    </a>
                                </div>
                                <span>Fill out the form to increase your chances of getting shortlisted</span>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border border-0">
                        <div className="card-body">
                            <img style={{ width: "100%" }} src={course?.courseImage} alt="Course Image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseDetailsBanner;
