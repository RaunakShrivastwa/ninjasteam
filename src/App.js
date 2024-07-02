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
import ErrorPages from './Components/ErrorPage/ErrorPages';
import AddCoursePanel from './Components/Admin/Course/Course/AddCoursePanel';
import AddModule from './Components/Admin/Course/Module/AddModule';
import DHome from './Documentation/Home/Home'
import OnlineCompiler from './Documentation/Home/OnlineCompiler ';
import VisitHome from './Documentation/javaScript/VisitHome';

import Basics from './Documentation/javaScript/Basics/Basics';
import JSIntro from './Documentation/javaScript/Basic_of_JS/Intro';
import Version from './Documentation/javaScript/Basic_of_JS/Version';
import Add_With_HTML from './Documentation/javaScript/Basic_of_JS/Add_With_HTML';
import Statement from './Documentation/javaScript/Basic_of_JS/Statement';
import Syntax from './Documentation/javaScript/Basic_of_JS/Syntax';
import Output from './Documentation/javaScript/Basic_of_JS/JS_Output';
import Comment from './Documentation/javaScript/Basic_of_JS/Comments';
import Intro from './Documentation/javaScript/Basic_of_JS/Intro';

export function urlFunction() {
  //  return 'https://ourninjas.onrender.com/';
 return 'http://localhost:4000/'
}

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/ninjas/Admin/view/StudentPage/:name" element={<Home />} />
          <Route exact path="/can/home" element={<Home />} />
          <Route exact path="/ninjas/AllCourses" element={<ViewAllCourses />} />
          <Route exact path="/ninja/CourseDetail/:id" element={<CourseDetails />} />
          <Route exact path="/ninja/course" element={<Course />} />
          <Route exact path="/ninja/auth/login" element={<LoginPage />} />
          <Route exact path="/ninja/auth/signup" element={<Signup />} />
          <Route exact path="/ninja/landing/dash/:st" element={<LandingDash />} />
          <Route exact path="/ninja/user/profile/:email" element={<UserProfile />} />
          <Route exact path="/ninja/add/:email" element={<HomeNavigate />} />
          <Route exact path="/ninja/classRoom/:id" element={<Room />} />
          <Route exact path="/ninja/learning/:name" element={<LearningBody />} />

          <Route exact path="/ninja/Admin/dashboard" element={<DashboardPanel pageName={"Dashboard"} />} />
          <Route exact path="/ninja/Admin/student" element={<DashboardPanel pageName={"Student"} />} />
          <Route exact path="/ninja/Admin/teacher" element={<DashboardPanel pageName={"Teacher"} />} />

          {/* Admin course  */}
          <Route exact path="/ninja/Admin/course" element={<DashboardPanel pageName={"Course"} />} />
          <Route exact path="/ninja/Admin/course/addCourse" element={<AddCoursePanel />} />
          <Route exact path="/ninja/Admin/course/viewCourse/:name" element={<DashboardPanel pageName={"ViewCourse"} />} />
          <Route exact path="/ninja/Admin/course/updateCourse/:name" element={<DashboardPanel pageName={"UpdateCourse"} />} />

          {/* Admin Course / module */}
          <Route exact path="/ninja/Admin/addModule" element={<AddModule />} />
          <Route exact path="/ninja/Admin/course/updateModule/:id" element={<DashboardPanel pageName={"updateCourseModule"} />} />
          <Route exact path="/ninja/Admin/course/view/module/:id" element={<DashboardPanel pageName={"chapterCourseModule"} />} />

          {/* Admin Course / module / chapter */}
          <Route exact path="ninja/Admin/course/module/updateChapter/:id" element={<DashboardPanel pageName={"updateChapterCourseModule"} />} />
          <Route exact path="/ninja/Admin/course/module/addChapter/:id" element={<DashboardPanel pageName={"addChapterCourseModule"} />} />
          <Route exact path="/ninja/Admin/course/module/viewChapter/:id" element={<DashboardPanel pageName={"viewChapter"} />} />
         
         
          <Route exact path="/ninja/unauthorized/page"  element={<ErrorPages />} />
        

          {/* Admin Course / module / chapter / topic */}
          <Route exact path="/ninja/Admin/course/module/Chapter/updateTopics/:id" element={<DashboardPanel pageName={"updateCourseTopics"} />} />
          <Route exact path="/ninja/Admin/course/module/Chapter/viewTopics/:id" element={<DashboardPanel pageName={"viewCourseTopics"} />} />
          <Route exact path="/ninja/Admin/course/module/Chapter/AddTopics/:chapterName" element={<DashboardPanel pageName={"addCourseTopics"} />} />

          <Route exact path='/ninjas/documentation/homepage' element={ <DHome />} />
          <Route exact path='/ninjas/documentation/homepage1' element={ <OnlineCompiler/>} />


          {/* for the documentation */}

          <Route exact path='/ninjas/documents/javascript/visit/home' element={<VisitHome/>} />

          {/*  javascript basics*/}
          <Route exact path='/ninjas/documentation/basics' element={<VisitHome Doc={Basics} />} />
          <Route exact path='/ninjas/documentation/js/intro' element={<VisitHome Doc={Intro} title={'Introduction With Javascript'} />} />
          <Route exact path='/ninjas/documentation/js/version' element={<VisitHome Doc={Version} title={'Javascript Version'} />} />
          <Route exact path='/ninjas/documentation/js/html' element={<VisitHome Doc={Add_With_HTML} title={'Add JS in HTML'}/>} />
          <Route exact path='/ninjas/documentation/js/statement' element={<VisitHome Doc={Statement} title={'Javascript Statement'} />} />
          <Route exact path='/ninjas/documentation/js/syntax' element={<VisitHome Doc={Syntax} title={'Javascript Syntax'}/>} />
          <Route exact path='/ninjas/documentation/js/output' element={<VisitHome Doc={Output} title={'Javascript Output'}/>} />
          <Route exact path='/ninjas/documentation/js/comment' element={<VisitHome Doc={Comment} title={'Javascript Comment'}/>} />



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
