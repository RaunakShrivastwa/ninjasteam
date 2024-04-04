import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './milestone.css';

function Modules({ module, course }) {
    const [courseD, setCourseD] = useState();
    return (
        <div className='cp' style={{ height: '60vh', overflow: 'auto' }}>
            {
                module?.chapter.length > 0 ? (
                    module?.chapter.map((c) => (
                        <Link to={`/ninja/learning/${c?.name}`} className='text-decoration-none'>
                            <div class="card mb-3 w-100 border border-0 p-1">
                                <div class="card-body w-100 shadow-lg " style={{ border: '10px solid #2d3668', borderTop: 0, borderRight: 0, borderBottom: 0, }}>
                                    <div class="d-flex justify-content-between">
                                        <img src={course?.courseImage} alt="courseImage" className='me-3' width={'50px'} />
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
                            <div class="card mt-2 shadow-lg">
                                <div class="card-header border-0">
                                    <span className='fw-2 text-primary'>Milestone</span>  {index + 1}
                                </div>
                                <div class="card-body">
                                    <blockquote class="blockquote mb-0">
                                        <p className='h5'>{data?.name}</p>
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