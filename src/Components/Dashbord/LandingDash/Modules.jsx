import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './milestone.css';
import DashBord from './DashBord';

function Modules({ module, course, setStone }) {
    const [courseD, setCourseD] = useState();
    return (
        <div className='container cp pb-5 mb-4' style={{ height: '60vh', overflow: 'auto' }}>
            <div onClick={() => setStone(0)}>
                <DashBord />
            </div>
            {
                module?.chapter.length > 0 ? (
                    module?.chapter.map((c) => (
                        <Link to={`/ninja/learning/${c?.name}`} className='text-decoration-none' onClick={(e) => e.stopPropagation()}>
                            <div className="card mb-3 w-100 mb-4 border border-0 p-1">
                                <div className="card-body rounded w-100 shadow-lg shadow-sm" style={{ border: '10px solid #2d3668', borderTop: 0, borderRight: 0, borderBottom: 0 }}>
                                    <div className="d-flex justify-content-between">
                                        <img src={course?.courseImage} alt="courseImage" className='me-3 rounded-circle' width={'50px'} />
                                        <span className="card-title h5 mt-2">{c?.name}</span>
                                        <a href="#" onClick={(e) => { e.preventDefault(); /* Your anchor tag click handler logic */ }}>
                                            <img src='https://cdn-icons-png.flaticon.com/128/2541/2541979.png' alt="courseImage" className='me-3 mt-1' width={'30px'} />
                                        </a>
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
                                            <a className='text-decoration-none' href="#" onClick={(e) => { e.stopPropagation(); /* Your anchor tag click handler logic */}}>
                                                <img src="https://cdn-icons-png.flaticon.com/128/138/138849.png" width='30px' alt="" />
                                            </a>
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