import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import NavigationMenu from "./Components/NavigationBar/NavigationMenu";
import Home from "./Components/HomePage/Home/Home";
import Course from "./Components/CoursePage/Course";
import ViewAllCourses from './Components/CoursePage/ViewAllCourse'

function App() {
  return (
    <div>
      <Router>
        <NavigationMenu />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/ninjas/course" Component={Course} />
          <Route exact path="/ninjas/AllCourses" Component={ViewAllCourses}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
