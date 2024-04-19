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
import Room from './Components/MyClassRoom/Room';
import LearningBody from './Components/Dashbord/StartLearning/LearningBody';
import UserProfile from './Components/User/UserProfile/UserProfile';
import DashboardPanel from './Components/Admin/Common/DashboardPanel';
import CoursePanel from './Components/Admin/Course/CoursePanel';
import AddCoursePanel from './Components/Admin/Course/Course/AddCoursePanel';

export function urlFunction() {
  // return 'https://ourninjas.onrender.com/';
  return 'http://localhost:4000/'
}

const App = () => {
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

          <Route exact path="/ninja/Admin/dashboard" element={<DashboardPanel pageName={"Dashboard"} />} />
          <Route exact path="/ninja/Admin/student" element={<DashboardPanel pageName={"Student"} />} />
          <Route exact path="/ninja/Admin/teacher" element={<DashboardPanel pageName={"Teacher"} />} />

          {/* Admin course  */}
          <Route exact path="/ninja/Admin/course" element={<DashboardPanel pageName={"Course"} />} />
          <Route exact path="/ninja/Admin/course/addCourse" element={<DashboardPanel pageName={"AddCourse"} />} />
          <Route exact path="/ninja/Admin/course/viewCourse/:name" element={<DashboardPanel pageName={"ViewCourse"} />} />
          <Route exact path="/ninja/Admin/course/updateCourse/:name" element={<DashboardPanel pageName={"UpdateCourse"} />} />

          {/* Admin Course / module */}
          <Route exact path="/ninja/Admin/course/addModule" element={<DashboardPanel pageName={"AddModule"} />} />
          <Route exact path="/ninja/Admin/course/updateModule/:id" element={<DashboardPanel pageName={"updateCourseModule"} />} />
          <Route exact path="/ninja/Admin/course/view/module/:id" element={<DashboardPanel pageName={"chapterCourseModule"} />} />

          {/* Admin Course / module / chapter */}
          <Route exact path="ninja/Admin/course/module/updateChapter/:id" element={<DashboardPanel pageName={"updateChapterCourseModule"} />} />
          <Route exact path="/ninja/Admin/course/module/addChapter/:id" element={<DashboardPanel pageName={"addChapterCourseModule"} />} />
          <Route exact path="/ninja/Admin/course/module/viewChapter/:id" element={<DashboardPanel pageName={"chapterCourse"} />} />

          {/* Admin Course / module / chapter / topic */}
          <Route exact path="/ninja/Admin/course/module/Chapter/updateTopics/:id" element={<DashboardPanel pageName={"updateCourseTopics"} />} />
          <Route exact path="/ninja/Admin/course/module/Chapter/viewTopics/:id" element={<DashboardPanel pageName={"viewCourseTopics"} />} />
          <Route exact path="/ninja/Admin/course/module/Chapter/AddTopics/:chapterName" element={<DashboardPanel pageName={"addCourseTopics"} />} />

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
