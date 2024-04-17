import React, { useState } from 'react'
import AdminStudent from './StudentPanel';

const StudentProfile = () => {
    const [closeStudent, setCloseStudent] = useState(true);

    const handleStudent = (rowData) => {
        console.log(rowData);
        setCloseStudent(false);
    };

    return (
        <>
            {closeStudent && (<>
                <div class="row mt-4 mb-2 border border-2 border-dark py-3 rounded rounded-lg">
                    <div class="col-sm-3 ">
                        <div class="card h-100 border border-0">
                            <div class="card-body">
                                <img src="https://cdn3.iconfinder.com/data/icons/web-design-and-development-2-6/512/87-1024.png" class="img-fluid" alt="profile_img" />
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-9">
                        <div class="card h-100 border border-0">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-lg me-2">
                                        <div className="row border border-2 border-dark rounded rounded-lg" style={{ position: 'relative' }} key="01">
                                            <label className="d-inline" style={{ position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                                <span className="fs-5 px-2" style={{ background: '#fff' }}>Name</span>
                                            </label>
                                            <div className="row mt-3 mb-1 fs-5 fw-bolder">
                                                <div className="d-inline-block bd-highlight">
                                                    <input type="text" class="border border-0 shadow-none form-control" placeholder="Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg ms-lg-2 mt-4 mt-lg-0">
                                        <div className="row border border-2 border-dark rounded rounded-lg" style={{ position: 'relative' }} key="01">
                                            <label className="d-inline" style={{ position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                                <span className="fs-5 px-2" style={{ background: '#fff' }}>Email ID</span>
                                            </label>
                                            <div className="row mt-3 mb-1 fs-5 fw-bolder">
                                                <div className="d-inline-block bd-highlight">
                                                    <input type="text" class="border border-0 shadow-none form-control" placeholder="Email ID" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mt-3">
                                    <div class="col-lg me-2">
                                        <div className="row border border-2 border-dark rounded rounded-lg" style={{ position: 'relative' }} key="01">
                                            <label className="d-inline" style={{ position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                                <span className="fs-5 px-2" style={{ background: '#fff' }}>Joining Date</span>
                                            </label>
                                            <div className="row mt-3 mb-1 fs-5 fw-bolder">
                                                <div className="d-inline-block bd-highlight">
                                                    <input type="date" class="border border-0 shadow-none form-control" placeholder="Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg ms-lg-2 mt-4 mt-lg-0">
                                        <div className="row border border-2 border-dark rounded rounded-lg" style={{ position: 'relative' }} key="01">
                                            <label className="d-inline" style={{ position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                                <span className="fs-5 px-2" style={{ background: '#fff' }}>Registration Fee</span>
                                            </label>
                                            <div className="row mt-3 mb-1 fs-5 fw-bolder">
                                                <div className="d-inline-block bd-highlight">
                                                    <input type="text" class="border border-0 shadow-none form-control" placeholder="000" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mt-3">
                                    <div class="col-lg me-2">
                                        <div className="row border border-2 border-dark rounded rounded-lg" style={{ position: 'relative' }} key="01">
                                            <label className="d-inline" style={{ position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                                <span className="fs-5 px-2" style={{ background: '#fff' }}>Course</span>
                                            </label>
                                            <div className="row mt-3 mb-1 fs-5 fw-bolder">
                                                <div className="d-inline-block bd-highlight">
                                                    <input type="text" class="border border-0 shadow-none form-control" placeholder="Enter Course Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg ms-lg-2 mt-4 mt-lg-0">
                                        <div className="row border border-2 border-dark rounded rounded-lg" style={{ position: 'relative' }} key="01">
                                            <label className="d-inline" style={{ position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                                <span className="fs-5 px-2" style={{ background: '#fff' }}>Course Duratiom</span>
                                            </label>
                                            <div className="row mt-3 mb-1 fs-5 fw-bolder">
                                                <div className="d-inline-block bd-highlight">
                                                    <input type="text" class="border border-0 shadow-none form-control" placeholder="Enter Number of Month" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mt-3">
                                    <div class="col-lg me-2">
                                        <div className="row border border-2 border-dark rounded rounded-lg" style={{ position: 'relative' }} key="01">
                                            <label className="d-inline" style={{ position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                                <span className="fs-5 px-2" style={{ background: '#fff' }}>Father's Name</span>
                                            </label>
                                            <div className="row mt-3 mb-1 fs-5 fw-bolder">
                                                <div className="d-inline-block bd-highlight">
                                                    <input type="text" class="border border-0 shadow-none form-control" placeholder="Enter Father's Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg ms-lg-2 mt-4 mt-lg-0">
                                        <div className="row border border-2 border-dark rounded rounded-lg" style={{ position: 'relative' }} key="01">
                                            <label className="d-inline" style={{ position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                                <span className="fs-5 px-2" style={{ background: '#fff' }}>Mother's Name</span>
                                            </label>
                                            <div className="row mt-3 mb-1 fs-5 fw-bolder">
                                                <div className="d-inline-block bd-highlight">
                                                    <input type="text" class="border border-0 shadow-none form-control" placeholder="Enter Mother's Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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