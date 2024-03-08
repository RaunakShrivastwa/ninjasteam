import React from 'react'
import CourseDetailsBanner from './CourseDetailsBanner'
import CourseDescription from './CourseDescription'
import CourseAlumniWork from './CourseAlumniWork'

const CourseDetails = () => {
    return (
        <div className="container">
            <CourseDetailsBanner />
            <CourseDescription />
            <CourseAlumniWork />
        </div>
    )
}

export default CourseDetails