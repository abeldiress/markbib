import { Link } from 'react-router-dom';

const SmallAssignmentList = ({Assignments, header}) => {
  return ( 
    <div className="small-assignments-list">
      <h2> {header} </h2>
      {Assignments.map((assignment) => (
        <div className="assignment-preview" >
          <Link to={`/assignment/${assignment._id}`}>
            <h3> {assignment._title} </h3>
            <h3> {assignment._toRubric}/{assignment._totRubric} rubrics completed </h3>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default SmallAssignmentList;