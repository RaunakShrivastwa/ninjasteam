import React, { useEffect, useState } from 'react'
import CourseHeader from '../CourseCommon/CourseHeader';
import CourseCategory from './CourseCategory';
import CourseType from './CourseType';
import CoursePopularity from './CoursePopularity';
import axios from 'axios';

const CourseOverview = () => {
    const [course, setCourse] = useState([]);
    useEffect(() => {
        const loadUser = async () => {
            try {
                const courseData = await axios.get(`https://ourninjas.onrender.com/course`);
                setCourse(courseData.data.course);

            } catch (err) {
                console.log("There is Error ", err);
            }
        };
        loadUser();
    }, []);

    const popularCourse1 = course.filter((c) => c.standred == 'popular')
    const fundamentalCourse1 = course.filter((data) => data.standred == 'fundamental');
    const selfCourse1 = course.filter((data) => data.standred == 'self');
    // filetr popular course





    return (
        <>
            <div className='container'>
                <CourseHeader pageHeading="Ninja's Courses" pageNarration="Interactive LIVE & Self-Paced Courses" />
                <div class='px-4'>
                    <CoursePopularity heading="Popular Now" pop={popularCourse1} />
                    <CourseCategory heading="Course Categories" />

                    <CourseType heading="Build Your Foundations" pop={fundamentalCourse1} course={course}/>
                    <CourseType heading="Self-Paced Courses" pop={selfCourse1}/>


                    {/* <CourseType heading="Live Courses" />    */}
                </div>
            </div>
        </>
    )
}

export default CourseOverview