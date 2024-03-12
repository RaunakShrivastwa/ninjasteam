import React from 'react';
import CourseOverview from './CousreOverview/CourseOverview';
import NavigationMenu from '../NavigationBar/NavigationMenu';

const Course = () => {
    return (
        <>
          <NavigationMenu />
            <CourseOverview />
        </>
    )
}

export default Course;