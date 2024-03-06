import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import NavigationMenu from "./Components/NavigationBar/NavigationMenu";
import Home from "./Components/HomePage/Home";
import Course from "./Components/CoursePage/Course";

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
