import {Link} from 'react-router-dom';

const RefLink = ({path, text}) => {
    return ( 
        <Link to={path}> {text} </Link>
    );
}
 
export default RefLink;