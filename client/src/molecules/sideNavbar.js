const SideNavbar = () => {
    return ( 
        <nav className="sideNavbar">
        <div className="dashboard">
            <Link to="/dashboard"> Dashboard </Link>
            <Link to="/classes"> Classes </Link>
            <Link to="/assignments"> Assignments </Link>
            <Link to="/account"> Account </Link>
        </div>  
    </nav>
    );
}
 
export default SideNavbar;