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
                const courseData = await axios.get(`http://localhost:4000/course`);
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
                    <CoursePopularity heading="Popular Course" pop={popularCourse1} />
                    <CourseCategory heading="tag" />

                    <CoursePopularity heading="Basics Course" pop={fundamentalCourse1}/>
                    <CoursePopularity heading="self" pop={selfCourse1}/>


                    {/* <CourseType heading="Live Courses" />    */}
                </div>
            </div>
        </>
    )
}

export default CourseOverview