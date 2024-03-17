import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Course from "./Components/CoursePage/Course";
import Home from "./Components/HomePage/Home/Home";
import CourseDetails from "./Components/CoursePage/CourseDetails/CourseDetails";
import Footer from "./Components/MainFooter/Footer";
import ViewAllCourses from "./Components/CoursePage/ViewAllCourse";
import LoginPage from './Components/Auth/Login/LoginOrSignup';
import Signup from './Components/Auth/Login/SignUp';
import LandingDash from './Components/Dashbord/LandingDash/LandingDash';

function App() {
  console.log("Abhijeet");
  return (
    <div>
      <Router>
        {/* <NavigationMenu /> */}
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/can/home" Component={Home} />
          <Route exact path="/ninjas/AllCourses" Component={ViewAllCourses}/>
          <Route exact path="/ninja/CourseDetail" Component={CourseDetails} />
          <Route exact path="/ninja/course" Component={Course} />
          <Route exact path="/ninja/auth/login" Component={LoginPage}/>
          <Route exact path="/ninja/auth/signup" Component={Signup}/>
          <Route exact path="/ninja/landing/dash" Component={LandingDash}/>
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
