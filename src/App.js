import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Course from './Components/CoursePage/Course';
import Home from './Components/HomePage/Home/Home';
import CourseDetails from './Components/CoursePage/CourseDetails/CourseDetails';
import LoginPage from './Components/Auth/Login/LoginOrSignup';
import Signup from './Components/Auth/Login/SignUp';
import LandingDash from './Components/Dashbord/LandingDash/LandingDash';
import HomeNavigate from './Components/Auth/AddNavigate/HomeNavigate';
import ViewAllCourses from './Components/CoursePage/viewAllCourses/ViewAllCourse';
import UserProfile from './Components/User/UserProfile';
import Room from './Components/MyClassRoom/Room';
import LearningBody from './Components/Dashbord/StartLearning/LearningBody';

export function urlFunction() {
  return 'http://localhost:4000/';
}

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/can/home" element={<Home />} />
          <Route exact path="/ninjas/AllCourses" element={<ViewAllCourses />} />
          <Route exact path="/ninja/CourseDetail/:id" element={<CourseDetails />} />
          <Route exact path="/ninja/course" element={<Course />} />
          <Route exact path="/ninja/auth/login" element={<LoginPage />} />
          <Route exact path="/ninja/auth/signup" element={<Signup />} />
          <Route exact path="/ninja/landing/dash/:st" element={<LandingDash />} />
          <Route exact path="/ninja/user/profile" element={<UserProfile />} />
          <Route exact path="/ninja/add/:email" element={<HomeNavigate />} />
          <Route exact path="/ninja/classRoom/:id" element={<Room />} />
          <Route exact path="/ninja/learning/:name" element={<LearningBody />} />
        </Routes>
      </Router>
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default App;
