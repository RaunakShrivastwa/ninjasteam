import React from 'react'
import CourseDetailsBanner from './CourseDetailsBanner'
import CourseDescription from './CourseDescription'
import CourseAlumniWork from './CourseAlumniWork'
import AboutCourse from './AboutCourse'
import CourseJourney from './CourseJourney'
import CourseFAQ from './CourseFAQ'
import NavigationMenu from '../../NavigationBar/NavigationMenu'

const CourseDetails = () => {
    return (
        <>
            <NavigationMenu />
            <div className="container">
                <CourseDetailsBanner />
                <CourseDescription />
                <CourseAlumniWork />
                <AboutCourse />
                <CourseJourney />
                <CourseFAQ />
            </div>
        </>
    )
}

export default CourseDetails