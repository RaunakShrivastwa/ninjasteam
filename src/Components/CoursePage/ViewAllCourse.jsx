import React from 'react'
import CourseHeader from './CourseCommon/CourseHeader';
import NavigationMenu from '../NavigationBar/NavigationMenu';
const ViewAllCourse = () => {
  return (
    <>
    <NavigationMenu />
      <div class="container">
        <CourseHeader pageHeading="Course Catalog" pageNarration="Interactive LIVE & Self-Paced Courses with Individual Attention by Industry Leading Gurus to Encourage Out-of-the-box thinking, leading to Clarity in Concepts, Creativity and Innovative Ideas." />

        {/* <CourseNav /> */}
      </div>

    </>
  )
}

export default ViewAllCourse