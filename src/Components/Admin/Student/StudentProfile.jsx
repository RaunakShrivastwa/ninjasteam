import React, { useEffect, useState } from 'react'
import AdminStudent from './StudentPanel';
import { urlFunction } from '../../../App'
import axios from 'axios';

const StudentProfile = ({ id }) => {
    const [closeStudent, setCloseStudent] = useState(true);
    const [user, setUser] = useState();

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


    const handleStudent = (rowData) => {
        console.log(rowData);
        setCloseStudent(false);
    };

    useEffect(() => {
        loadUser()
    }, [id]);

    const loadUser = async () => {
        try {
            const u = await axios.get(urlFunction() + `user/fetchUser/${id}`);
            setUser(u.data)
        } catch (err) {
            return console.log("there is Error ", err);
        }
    }

    return (
        <>
            {closeStudent && (<>
                <div class="row mt-4 mb-2  py-3 rounded rounded-lg h-100 overflow-auto">
                    <div class="col-sm-3 ">
                        <div class="card h-100 border border-0">
                            <div class="card-body">
                                <img src="https://cdn3.iconfinder.com/data/icons/web-design-and-development-2-6/512/87-1024.png" class="img-fluid" alt="profile_img" />
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-9">
                        <form action="">
                            <div class="card h-100 border border-0">
                                <div class="card-body">
                                    <div class="row">
                                        {/* for the name  */}
                                        <div class="col-lg me-2">
                                            <div className="row border border-2 border-dark rounded rounded-lg" style={{ position: 'relative' }} key="01">
                                                <label className="d-inline" style={{ position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                                    <span className="fs-5 px-2" style={{ background: '#fff' }}>Name</span>
                                                </label>
                                                <div className="row mt-3 mb-1 fs-5 fw-bolder">
                                                    <div className="d-inline-block bd-highlight">
                                                        <input type="text" value={user?.userName} class="border border-0 shadow-none form-control" placeholder="Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* for the user Email */}
                                        <div class="col-lg ms-lg-2 mt-4 mt-lg-0">
                                            <div className="row border border-2 border-dark rounded rounded-lg" style={{ position: 'relative' }} key="01">
                                                <label className="d-inline" style={{ position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                                    <span className="fs-5 px-2" style={{ background: '#fff' }}>Email ID</span>
                                                </label>
                                                <div className="row mt-3 mb-1 fs-5 fw-bolder">
                                                    <div className="d-inline-block bd-highlight">
                                                        <input type="text" value={user?.userEmail} class="border border-0 shadow-none form-control" placeholder="Email ID" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mt-3">
                                        {/* for the joining date */}
                                        <div class="col-lg me-2">
                                            <div className="row border border-2 border-dark rounded rounded-lg" style={{ position: 'relative' }} key="01">
                                                <label className="d-inline" style={{ position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                                    <span className="fs-5 px-2" style={{ background: '#fff' }}>Joining Date</span>
                                                </label>
                                                <div className="row mt-3 mb-1 fs-5 fw-bolder">
                                                    <div className="d-inline-block bd-highlight">
                                                        <input type="text" value={user?.createdAt} class="border border-0 shadow-none form-control" placeholder="Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg ms-lg-2 mt-4 mt-lg-0">
                                            <div className="row border border-2 border-dark rounded rounded-lg" style={{ position: 'relative' }} key="01">
                                                <label className="d-inline" style={{ position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                                    <span className="fs-5 px-2" style={{ background: '#fff' }}>Contact</span>
                                                </label>
                                                <div className="row mt-3 mb-1 fs-5 fw-bolder">
                                                    <div className="d-inline-block bd-highlight">
                                                        <input type="text" value={"+91 " + user?.userMob} class="border border-0 shadow-none form-control" placeholder="000" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-3">

                                        {/* for the course */}
                                        <div class="col-lg me-2">
                                            <div className="row border border-2 border-dark rounded rounded-lg" style={{ position: 'relative' }} key="01">
                                                <label className="d-inline" style={{ position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                                    <span className="fs-5 px-2" style={{ background: '#fff' }}>Courses</span>
                                                </label>
                                                <div className="row mt-3 mb-1 fs-5 fw-bolder">
                                                    <li class="nav-item dropdown form-control border-0 shadow-none">
                                                        <a class="nav-link dropdown-toggle form-control border-0 shadow-none" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            {user?.courses[0]?.name || 'No Course'}
                                                        </a>
                                                        <ul class="dropdown-menu form-control p-2 shadow-lg shadow-none">
                                                            {
                                                                user?.courses?.map((data, index) => (

                                                                    <>
                                                                        <li className='p-2'>{index + 1}&nbsp; &nbsp;{data?.name}</li>
                                                                    </>


                                                                ))
                                                            }
                                                        </ul>
                                                    </li>
                                                </div>
                                            </div>
                                        </div>

                                        {/* for the Bio */}
                                        <div class="col-lg ms-lg-2 mt-4 mt-lg-0">
                                            <div className="row border border-2 border-dark rounded rounded-lg" style={{ position: 'relative' }} key="01">
                                                <label className="d-inline" style={{ position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                                    <span className="fs-5 px-2" style={{ background: '#fff' }}>User Bio</span>
                                                </label>
                                                <div className="row mt-3 mb-1 fs-5 fw-bolder">
                                                    <div className="d-inline-block bd-highlight">
                                                        <input value={user?.userBio} type="text" class="border border-0 shadow-none form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* for the skill */}
                                    <div class="row mt-3">
                                        <div class="col-lg me-2">
                                            <div className="row border border-2 border-dark rounded rounded-lg" style={{ position: 'relative' }} key="01">
                                                <label className="d-inline" style={{ position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                                    <span className="fs-5 px-2" style={{ background: '#fff' }}>Skills</span>
                                                </label>

                                                <div class="card-body py-0">
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
                                        </div>
                                    </div>

                                    {/* for the exprience */}
                                    <div class="card mt-3 border border-2 border-dark">
                                        <h5 class="card-header bg-transparent border border-0 m-0 pb-1">
                                            <div class="d-flex justify-content-between fw-bold m-0 p-0">
                                                <span>Work Experience</span>
                                                <button type="button" class="p-2 m-2 btn btn-outline-success p-0 px-1 fw-bold">
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
                                                                    <span class="fw-bold"><span>2019</span> - <span>2024</span></span>
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
                        </form>
                    </div>
                </div>
                <button type="button" class="btn btn-outline-danger p-1 float-end rounded roumded-circle" onClick={() => handleStudent()}>
                    <span class="fw-bold fs-6">close </span><i class="fa-solid fa-circle-xmark fs-6"></i>
                </button>
            </>
            )}
            {!closeStudent && (
                <AdminStudent />
            )}

        </>
    )
}

export default StudentProfile