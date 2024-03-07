import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import NavigationMenu from "./Components/NavigationBar/NavigationMenu";

import Course from "./Components/CoursePage/Course";
import Home from "./Components/HomePage/Home/Home";
import ViewAllCourse from "./Components/CoursePage/ViewAllCourse";

function App() {
  return (
    <div>
      <Router>
        <NavigationMenu />
        <Routes>
          <Route exact path="/can/home" Component={Home} />
          <Route exact path="/ourNinja/course" Component={Course} />
          <Route exact path="/ourNinja/AllCourse" Component={ViewAllCourse} />          
        </Routes>
      </Router>
    </div>
  )
}

export default App;
