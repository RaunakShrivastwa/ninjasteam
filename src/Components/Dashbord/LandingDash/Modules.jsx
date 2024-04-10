import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './milestone.css';

function Modules({ module, course, setStone }) {
    const [courseD, setCourseD] = useState();
    return (
        <div className='container cp pb-5 mb-4' style={{ height: '60vh', overflow: 'auto' }}>
            {
                module?.chapter.length > 0 ? (
                    module?.chapter.map((c) => (
                        <Link to={`/ninja/learning/${c?.name}`} className='text-decoration-none'>
                            <div class="card mb-3 w-100 mb-4 border border-0 p-1">
                                <div class="card-body rounded w-100 shadow-lg shadow-sm" style={{ border: '10px solid #2d3668', borderTop: 0, borderRight: 0, borderBottom: 0, }}>
                                    <div class="d-flex justify-content-between">
                                        <img src={course?.courseImage} alt="courseImage" className='me-3 rounded-circle' width={'50px'} />
                                        <span class="card-title h5">{c?.name}</span>
                                        <img src={course?.courseImage} alt="courseImage" className='me-3' width={'50px'} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                ) :
                    (
                        course?.modules?.map((data, index) => (
                            <div class="card mt-2 pb-4 mb-4 shadow-lg shadow-sm" style={{ cursor: 'pointer' }} key={index} onClick={() => setStone(index + 1)}>
                                <div class="card-header border-0" style={{ backgroundColor: '#cdd2f1' }}>
                                    <span className='fw-2 text-primary'>Milestone</span>  {index + 1}
                                </div>
                                <div class="card-body">
                                    <blockquote class="blockquote mb-0">
                                        <div className='d-flex'>
                                            <div className='col-md-11 col-sm-10'>
                                                <span className='h5 me-5'>{data?.name}</span>
                                            </div>
                                            <div className='col-md-1'>
                                                <a className='text-decoration-none' href="">PDF</a>
                                            </div>
                                        </div>

                                    </blockquote>
                                </div>
                            </div>
                        ))

                    )
            }

        </div>

    )
}

export default Modules