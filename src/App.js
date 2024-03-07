import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import NavigationMenu from "./Components/NavigationBar/NavigationMenu";
<<<<<<<<< Temporary merge branch 1
import Home from "./Components/HomePage/Home";
import Course from "./Components/CoursePage/Course";
=========
import Home from "./Components/HomePage/Home/Home";
>>>>>>>>> Temporary merge branch 2

function App() {
  return (
    <div>
      <Router>
        <NavigationMenu />
        <Routes>
          <Route exact path="/can/home" Component={Home} />
          <Route exact path="/can/course" Component={Course} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
