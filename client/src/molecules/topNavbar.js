import {Link} from 'react-router-dom';

const topNavbar = () => {
    return (
        <nav className="topNavbar">
            <div className="topDashboard">
                <h1> Hi </h1>
                <Link to="/"> Home </Link>
                <Link to="/about"> About Us </Link>
                <Link to="/signup"> Create Account </Link>
                <Link to="/login"> Login </Link>
            </div>  
        </nav>
    );
}
 
export default topNavbar;