import {Link} from 'react-router-dom';

const RefLink = ({path, text, ...props}) => {
  return ( 
    <Link to={path} {...props}> {text} </Link>
  );
}
 
export default RefLink;