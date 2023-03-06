import {Link} from 'react-router-dom';

const TopNavbar = () => {
    return (
    <nav className="topNavbar">
        <div className="links">
            <Link to="/"> Home </Link>
            <Link to="/signup"> Create Account </Link>
            <Link to="/login"> Login </Link>
        </div>  
    </nav>
    );
}
 
export default TopNavbar;