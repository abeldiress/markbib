import RefLink from '../atoms/RefLink'

const SideNavbar = () => {
    return ( 
        <nav className="sideNavbar">
            <div className="dashboard">
                <RefLink path="/dashboard" text="Dashboard"/>
                <RefLink path="/classes" text="Classes"/>
                <RefLink path="/assignments" text="Assignments"/>
                <RefLink path="/settings" text="Account"/>
            </div>  
    </nav>
    );
}
 
export default SideNavbar;