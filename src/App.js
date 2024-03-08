import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationMenu from "./Components/NavigationBar/NavigationMenu";

import Course from "./Components/CoursePage/Course";
import ViewAllCourse from "./Components/CoursePage/ViewAllCourse";
import Home from "./Components/HomePage/Home/Home";
import CourseDetails from "./Components/CoursePage/CourseDetails/CourseDetails";
function App() {
  return (
    <div>
      <Router>
        <NavigationMenu />
        <Routes>

          <Route exact path="/can/home" Component={Home} />
          <Route exact path="/Ninja/course" Component={Course} />
          <Route exact path="/Ninja/AllCourse" Component={ViewAllCourse} />
          <Route exact path="/Ninja/CourseDetail" Component={CourseDetails} />
          <Route exact path="/" Component={Home} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
