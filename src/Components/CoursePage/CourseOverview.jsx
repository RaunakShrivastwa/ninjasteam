import React from 'react'
import CourseHeader from './CourseHeader';
import CoursePopularity from './CoursePopularity';
import CourseCategory from './CourseCategory';
import CourseType from './CourseType';

const CourseOverview = () => {
    return (
        <>
            <div className='container'>
                <CourseHeader pageHeading="Ninja's Courses" pageNarration="Interactive LIVE & Self-Paced Courses" />
                <div class='px-4'>
                    <CoursePopularity heading="Popular Now" />
                    <CourseCategory heading="Course Categories" />
                    <CourseType heading="Live Courses" link="/ourNinja/AllCourse" />
                    <CourseType heading="Self-Paced Courses" link="/ourNinja/AllCourse" />
                    <CourseType heading="Build Your Foundations" link="/ourNinja/AllCourse" />
                </div>
            </div>
        </>
    )
}

export default CourseOverview