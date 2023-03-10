import { Link } from 'react-router-dom';

const LargeAssignmentList = ({Assignments, header}) => {
  return ( 
    <div className="large-assignments-list">
      <h2> {header} </h2>
      {Assignments.map((assignment) => (
        <div className="assignment-preview" >
          <Link to={`/assignment/${assignment._id}`}>
            <h3> {assignment._title} </h3>
            <h3> {assignment._toRubric}/{assignment._totRubric}</h3>
            { assignment._isMarkbanded && <h2> Markbanded Assessment </h2> }
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default LargeAssignmentList;