import topNavbar from './molecules/topNavbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <topNavbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>}>
              </Route>
              <Route exact path="/login" element={<Login/>}>
              </Route>
              <Route exact path="/signup" element={<Signup/>}>
              </Route>
          </Routes>
        </div>  
      </div>
    </Router>
  );
}

export default App;
