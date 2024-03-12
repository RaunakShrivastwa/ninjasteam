import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationMenu from "./Components/NavigationBar/NavigationMenu";

import Course from "./Components/CoursePage/Course";
import ViewAllCourse from "./Components/CoursePage/ViewAllCourse";
import Home from "./Components/HomePage/Home/Home";
import CourseDetails from "./Components/CoursePage/CourseDetails/CourseDetails";
import ViewAllCourses from "./Components/CoursePage/ViewAllCourse";
import LoginPage from './Components/Auth/Login/LoginOrSignup';
import Signup from './Components/Auth/Login/SignUp';
import LandingDash from "./Components/Dashbord/LandingDash/LandingDash";


function App() {
  return (
    <div className="">
     
      <Router>
        {/* <NavigationMenu /> */}
        <Routes>
          <Route exact path="/can/home" Component={Home} />       
          <Route exact path="/ninja/CourseDetail" Component={CourseDetails} />
          <Route exact path="/" Component={Home} />
          <Route exact path="/ninja/course" Component={Course} />
          <Route exact path="/ninjas/AllCourses" Component={ViewAllCourses}/>
          <Route exact path="/ninja/auth/login" Component={LoginPage}/>
          <Route exact path="/ninja/auth/signup" Component={Signup}/>
          <Route exact path="/ninja/landing/dash" Component={LandingDash}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
