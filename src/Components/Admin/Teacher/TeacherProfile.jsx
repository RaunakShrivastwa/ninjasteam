import React, { useState } from 'react'
import AdminTeacher from './TeacherPanel';

const TeacherProfile = ({ data, identity }) => {
    const skillDetails = [{
        title: "HTML",
        percentage: 90,
        imageIcon: "https://cdn.rawgit.com/shannonmoeller/front-end-logo/master/exports/front-end-logo-color.png"
    }, {
        title: "Java",
        percentage: 80,
        imageIcon: "https://th.bing.com/th/id/OIP.n8pa_ux7uUyU9CJrzb1scAHaHa?rs=1&pid=ImgDetMain"
    }, {
        title: "Database",
        percentage: 70,
        imageIcon: "https://th.bing.com/th/id/OIP.kv1nttrho731I9qY37xlmwHaHa?rs=1&pid=ImgDetMain"
    }]

    const [teacherProfile, setteacherProfile] = useState(true);

    const handleClose = () => {
        setteacherProfile(false);
    };

    return (
        <>
            {teacherProfile && (
                <div class="mx-5">
                    <div class="row mt-4 mb-2">
                        <div class="col-6">
                            <div class="card h-100 border border-0">
                                <div class="card h-100 py-0 my-2 border border-2 border-dark px-3">
                                    <div class="d-flex justify-content-start align-items-center">
                                        <img src="https://cdn3.iconfinder.com/data/icons/web-design-and-development-2-6/512/87-1024.png" class="img-fluid" alt="profile_img" style={{ width: '75px' }} />

                                        <div class="card-body m-0">
                                            <h5 class="card-title fw-bold mb-0 p-0">{identity}</h5>
                                            <p class="fs-6 my-0 p-0">
                                                <i class="fa-solid fa-location-dot me-2"></i>New Ashok Nagar, Delhi
                                            </p>

                                            <p class="fs-6 my-0 p-0">
                                                <span class="fw-bold">Role - </span>
                                                <span>Instructor</span>
                                            </p>
                                            <p class="fs-6 my-0 p-0">
                                                <span class="fw-bold">Course - </span>
                                                <span>JavaScript</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="card my-2 border border-2 border-dark">
                                    <h5 class="card-header bg-transparent border border-0 m-0 pb-1">
                                        <div class="d-flex justify-content-between fw-bold m-0 p-0">
                                            <span>Skill</span>
                                            <button type="button" class="btn btn-outline-success p-0 px-1 fw-bold">
                                                Add <i class="fa-solid fa-circle-plus"></i>
                                            </button>
                                        </div>
                                    </h5>
                                    <div class="card-body my-0 py-0">
                                        {
                                            skillDetails.map((skill) => {
                                                return <div class="d-flex justify-content-start align-items-center">
                                                    <img src={skill.imageIcon} class="img-fluid me-0 pe-0" alt="profile_img" style={{ width: '30px' }} />
                                                    <div class="card-body m-0">
                                                        <div class="h5 fw-bold m-0 p-0">{skill.title}</div>
                                                        <div class="progress my-0 py-0 rounded rounded-pills" style={{ height: '5px' }}>
                                                            <div class="progress-bar" role="progressbar" style={{ width: `${skill.percentage}%` }} aria-valuenow={skill.percentage} aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>

                                <div class="card border border-2 border-dark mt-1">
                                    <div className="card-header fw-bold bg-transparent border border-2 border-dark border-top-0 border-start-0 border-end-0 mx-3 px-0">Contract Us</div>
                                    <div className="card-body">
                                        <div class="d-flex justify-content-between">
                                            <button type="button" class="btn btn-outline-secondary">
                                                <i class=" fs-4 fa-brands fa-instagram"></i>
                                            </button>
                                            <button type="button" class="btn btn-outline-success">
                                                <i class=" fs-4 fa-brands fa-facebook"></i>
                                            </button>
                                            <button type="button" class="btn btn-outline-danger">
                                                <i class=" fs-4 fa-solid fa-envelope"></i>
                                            </button>
                                            <button type="button" class="btn btn-outline-warning">
                                                <i class=" fs-4 fa-brands fa-github"></i>
                                            </button>
                                            <button type="button" class="btn btn-outline-info">
                                                <i class=" fs-4 fa-brands fa-linkedin"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="card h-100 border border-0">
                                <div class="card my-2 border border-2 border-dark">
                                    <h5 class="card-header bg-transparent border border-2 border-top-0 border-end-0 border-start-0 border-dark m-0 mx-3 px-0 pb-1">
                                        <div class="d-flex justify-content-between fw-bold m-0 p-0">
                                            <span>About Us</span>
                                        </div>
                                    </h5>
                                    <div class="card-body my-0 py-0 mx-0">
                                        <textarea class="form-control shadow-none border border-0 px-0 overflow-auto my-1" placeholder='About Us' id="exampleFormControlTextarea1" rows="3">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat beatae assumenda ipsa id tenetur, facere quae eaque officiis fugit voluptatem!
                                        </textarea>
                                    </div>
                                </div>

                                <div class="card mt-3 border border-2 border-dark">
                                    <h5 class="card-header bg-transparent border border-0 m-0 pb-1">
                                        <div class="d-flex justify-content-between fw-bold m-0 p-0">
                                            <span>Work Experience</span>
                                            <button type="button" class="btn btn-outline-success p-0 px-1 fw-bold">
                                                Add <i class="fa-solid fa-circle-plus"></i>
                                            </button>
                                        </div>
                                    </h5>
                                    <div class="card-body my-0 py-0">
                                        {
                                            skillDetails.map((skill) => {
                                                return <>
                                                    <div class="d-flex justify-content-start align-items-center my-4">
                                                        <img src={skill.imageIcon} class="img-fluid me-2 pe-0" alt="profile_img" style={{ width: '40px' }} />
                                                        <div class="card-body m-0 p-0">
                                                            <div class="h5 fw-bold m-0 p-0">HDFC</div>
                                                            <div class="d-flex justify-content-between">
                                                                <span>FullStack Developer</span>
                                                                <span><span>2019</span> - <span>2024</span></span>
                                                            </div>
                                                            <div class="">
                                                                <span class="fw-bold">Tech Stack - </span>
                                                                <span>
                                                                    <span>2019</span> - <span>2024</span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >

                    <button type="button" class="btn btn-outline-danger p-1 float-end rounded roumded-circle" onClick={() => handleClose()}>
                        <span class="fw-bold fs-6">close </span><i class="fa-solid fa-circle-xmark fs-6"></i>
                    </button>
                </div >
            )}

            {!teacherProfile && (
                <AdminTeacher />
            )}
        </>
    )
}

export default TeacherProfile