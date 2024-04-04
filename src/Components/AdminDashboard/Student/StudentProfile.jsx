import React from 'react'

const StudentProfile = () => {
    return (<>
        <div class="row mt-3 border border-2 border-dark py-3">
            <div class="col-sm-3 ">
                <div class="card h-100">
                    <div class="card-body">
                        <img src="https://cdn3.iconfinder.com/data/icons/web-design-and-development-2-6/512/87-1024.png" class="img-fluid" alt="profile_img" />
                    </div>
                </div>
            </div>
            <div class="col-sm-9">
                <div class="card h-100">
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
                                            <input type="text" class="border border-0 shadow-none form-control" placeholder="Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
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
                                        <span className="fs-5 px-2" style={{ background: '#fff' }}>Course</span>
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
                                        <span className="fs-5 px-2" style={{ background: '#fff' }}>Course Duratiom</span>
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
                                        <span className="fs-5 px-2" style={{ background: '#fff' }}>Father's Name</span>
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
                                        <span className="fs-5 px-2" style={{ background: '#fff' }}>Mother's Name</span>
                                    </label>
                                    <div className="row mt-3 mb-1 fs-5 fw-bolder">
                                        <div className="d-inline-block bd-highlight">
                                            <input type="text" class="border border-0 shadow-none form-control" placeholder="Email ID" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </>)
}

export default StudentProfile