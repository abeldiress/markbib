import { Link } from 'react-router-dom';

const ClassList = ({Classes, header}) => {
  return ( 
    <div className="class-list">
      <h2> {header} </h2>
      {Classes.map((Class) => (
        <div className="assignment-preview" >
          <Link to={`/class/${Class._id}`}>
            <h3> {Class.courseCode} </h3>
            <h3> {Class._students} students </h3>
            <h3> Period {Class._period} </h3>
            <h3> {Class.assignments} assignments </h3>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default ClassList;