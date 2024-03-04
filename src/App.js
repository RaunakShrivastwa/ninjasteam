import AboutMain from "./Components/AboutPage/AboutMain";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import NavigationMenu from "./Components/NavigationBar/NavigationMenu";
import Home from "./Components/HomePage/Home";

function App() {
  return (
    <div>
      <Router>
        <NavigationMenu />
        <Routes>
          <Route exact path="/can/about" Component={AboutMain} />
          <Route exact path="/can/home" Component={Home} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
