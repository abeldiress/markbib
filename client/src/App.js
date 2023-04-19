import TopNavbar from './molecules/TopNavbar';
import Classes from './pages/Classes';
// import SideNavbar from './molecules/sideNavbar';
import Recovery from './pages/Recovery';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from "./pages/Home";
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <TopNavbar/>
        <div className="content">
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/recovery" element={<Recovery/>}/>
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/class/:class_id" element={<Classes/>}/>
          </Routes>
        </div>  
      </div>
    </Router>
  );
}

export default App;
