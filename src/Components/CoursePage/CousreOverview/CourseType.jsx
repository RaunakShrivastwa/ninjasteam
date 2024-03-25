import React from 'react'
import CourseCard from '../CourseCommon/CourseCard'
import { Link } from 'react-router-dom'

const CourseType = ({ heading ,pop,course}) => {
    return (
        <div className='mb-5'>
            <h3 className="card-title d-flex justify-content-between align-items-center mt-4 mb-2">
                <span className="h4 fw-bold">{heading}</span>
                <Link to={`/ninjas/AllCourses`} className="btn btn-secondary btn btn-sm fw-bold bg-transparent text-dark border-0">View All <img src="/image/arrow.png" alt="arrow" srcset="" style={{ width: '20px' }} /> </Link>
            </h3>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {
                    pop.map((data,index) => (
                       index < 3 ? ( <CourseCard courseData={data} />) : null
                    ))
                }

            </div>
        </div>
    )
}

export default CourseType