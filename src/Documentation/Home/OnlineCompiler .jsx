import React from 'react';
import './Online.css'
import Home from './Home';
import Course from '../CourseList/Course';


function OnlineCompiler() {
  return (
    <div id='body1' className='d-flex flex-wrap w-100 vh-100 overflow-auto'>
      <Home />
       <Course />
    </div>
  )
}

export default OnlineCompiler 