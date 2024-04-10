import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';


function CourseHeading({ mods, course }) {
    const [user, setUser] = useState("");
    const loadUser = () => {
        const userInfo = Cookies.get('yourData')
        if (userInfo) {
            setUser(JSON.parse(userInfo));
        }
    }
    useEffect(() => {
        loadUser();
    }, [])

    return (
        <div class="row  no-gutters " style={{ background: '#2d3668' }}>
            <div class="col-sm-6 mb-sm-0 col-md-9">
                <div class="card border-0">
                    <div class="card-body " style={{ background: '#2d3668' }}>
                        <div class="card" style={{ maxHeight: '540px', border: '0' }}>
                            <div class="row g-0">
                                <div className="col-md-2 d-flex justify-content-around align-items-center" style={{ background: '#2d3668', border: '0' }}>
                                    <Link to={`/ninja/landing/dash/${course?.name}`}><img style={{ borderRadius: '50%', cursor: 'pointer', width: '130px', height: '120px' }} title={user?.userName} src={user?.profile} class=" img-fluid" alt="..." /></Link>
                                </div>
                                <div class="col-md-10">
                                    <div class="card-body" style={{ background: '#2d3668' }}>
                                        <p class="card-title text-primary h4">{course?.name}</p>
                                        <h4 class="card-text text-white d-none d-sm-block">You try to read, we will leave you after learning, <span className='text-danger'>keep coding</span></h4>
                                        <p className='text-white d-none d-sm-block'>Yet to Score: <span>0</span></p>
                                        <p className='d-none d-sm-block'><img width='30px' src="https://cdn-icons-png.flaticon.com/128/615/615075.png" alt="" /><span className='text-white'>Total Course mates:</span> <span className='text-white'>{course?.student?.length}</span></p>
                                        <button className='btn room me-5'>Download Browchers</button>
                                        <button className='btn room'>Live Classes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-none d-sm-block col-sm-6 col-md-3">
                <div class="card border-0" style={{ background: '#2d3668' }}>
                    <div class="card-body border-0 text-center">
                        <img src="https://res.cloudinary.com/dqarshyzz/image/upload/v1710520447/public/image/icon/mps96bl2hb2sjyxrgzyn.png" class="p-3 img-fluid rounded-start" alt="..." />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CourseHeading