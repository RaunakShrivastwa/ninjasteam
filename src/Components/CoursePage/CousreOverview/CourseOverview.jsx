import React from 'react'
import CourseHeader from '../CourseCommon/CourseHeader';
import CourseCategory from './CourseCategory';
import CourseType from './CourseType';
import CoursePopularity from './CoursePopularity';

const CourseOverview = () => {
    return (
        <>
            <div className='container'>
                <CourseHeader pageHeading="Ninja's Courses" pageNarration="Interactive LIVE & Self-Paced Courses" />
                <div class='px-4'>
                    <CoursePopularity heading="Popular Now" />
                    <CourseCategory heading="Course Categories" />
                    <CourseType heading="Live Courses" />
                    <CourseType heading="Self-Paced Courses" />
                    <CourseType heading="Build Your Foundations" />
                </div>
            </div>
        </>
    )
}

export default CourseOverview