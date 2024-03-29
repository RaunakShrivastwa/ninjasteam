import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationMenu from "./Components/NavigationBar/NavigationMenu";

import Course from "./Components/CoursePage/Course";
import ViewAllCourse from "./Components/CoursePage/ViewAllCourse";
import Home from "./Components/HomePage/Home/Home";
import CourseDetails from "./Components/CoursePage/CourseDetails/CourseDetails";
import ViewAllCourses from "./Components/CoursePage/ViewAllCourse";

function App() {
  const data=["jitendra", "apple", "boy","shubham kumar"]
  return (
    <div>
     
      <Router>
        <NavigationMenu />
        {data.map((item)=>(<b>{item}</b>))}
        <Routes>
          <Route exact path="/can/home" Component={Home} />       
          <Route exact path="/Ninja/AllCourse" Component={ViewAllCourse} />
          <Route exact path="/Ninja/CourseDetail" Component={CourseDetails} />
          <Route exact path="/" Component={Home} />
          <Route exact path="/ninja/course" Component={Course} />
          <Route exact path="/ninjas/AllCourses" Component={ViewAllCourses}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
