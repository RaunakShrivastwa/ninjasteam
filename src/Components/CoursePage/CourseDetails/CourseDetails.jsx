import React, { useEffect, useState } from 'react'
import CourseDetailsBanner from './CourseDetailsBanner'
import CourseDescription from './CourseDescription'
import CourseAlumniWork from './CourseAlumniWork'
import AboutCourse from './AboutCourse'
import CourseJourney from './CourseJourney'
import CourseFAQ from './CourseFAQ'
import NavigationMenu from '../../NavigationBar/NavigationMenu'
import { useParams } from 'react-router'
import axios from 'axios'

const CourseDetails = () => {
    const [course,setCourse] = useState('');
    const {id} = useParams();
     
    useEffect(() => {
        const loadUser = async () => {
            try {
                const courseData = await axios.get(`http://localhost:4000/course/courseName/${id}`);
                setCourse(courseData.data.courseInfo);

            } catch (err) {
                console.log("There is Error ", err);
            }
        };
        loadUser();
    }, []);
    return (
        <>
            <NavigationMenu />
            <div className="container">
                <CourseDetailsBanner course={course}/>
                <CourseDescription course={course}/>
                <CourseAlumniWork />
                <AboutCourse course={course}/>
                <CourseJourney />
                <CourseFAQ />
            </div>
        </>
    )
}

export default CourseDetails