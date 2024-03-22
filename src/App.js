import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Course from "./Components/CoursePage/Course";
import Home from "./Components/HomePage/Home/Home";
import CourseDetails from "./Components/CoursePage/CourseDetails/CourseDetails";
import ViewAllCourses from "./Components/CoursePage/viewAllCourses/ViewAllCourse";
import LoginPage from './Components/Auth/Login/LoginOrSignup';
import Signup from './Components/Auth/Login/SignUp';
import LandingDash from './Components/Dashbord/LandingDash/LandingDash';
import UserProfile from "./Components/User/UserProfile/UserProfile";
import userAccount from "./Components/User/UserAccount/UserAccountPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/can/home" Component={Home} />
          <Route exact path="/ninjas/AllCourses" Component={ViewAllCourses} />
          <Route exact path="/ninja/CourseDetail" Component={CourseDetails} />
          <Route exact path="/ninja/course" Component={Course} />
          <Route exact path="/ninja/auth/login" Component={LoginPage} />
          <Route exact path="/ninja/auth/signup" Component={Signup} />
          <Route exact path="/ninja/landing/dash" Component={LandingDash} />
          <Route exact path="/ninja/user/profile" Component={UserProfile} />
          <Route exact path="/ninja/user/account" Component={userAccount} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
