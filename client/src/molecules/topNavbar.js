import RefLink from '../atoms/RefLink'

const TopNavbar = () => {
    return (
    <nav className="topNavbar">
        <div className="links">
            <RefLink path="/" text="Home"/>
            <RefLink path="/signup" text="Create Account"/>
            <RefLink path="/login" text="Login"/>
        </div>  
    </nav>
    );
}
 
export default TopNavbar;