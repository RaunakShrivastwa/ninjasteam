import React from 'react';
import CourseHeader from './CourseHeader';
import CoursePopularity from './CoursePopularity';
import CourseCategory from './CourseCategory';
import LiveCourse from './LiveCourse';

const Course = () => {
    return (
        <>
            <div className='container'>
                 <CourseHeader />
                <div class='border border-2 border-dark px-4'>
                    <CoursePopularity heading="Popular Now" />
                    <CourseCategory heading="Course Categories" />
                    <LiveCourse />
                </div>
            </div>
        </>
    )
}

export default Course;