import SmallAssignmentList from "../molecules/SmallAssignmentList";
import ClassList from "../molecules/ClassList";
import useFetch from "../useFetch";
import RefLink from "../atoms/RefLink";

const Dashboard = () => {
  const {data: Classes} = useFetch('http://localhost:3001/teacher/{uuid}')
  const {data: Assignments} = useFetch('http://localhost:3001/Assignments')

  return (
    <div className="dashboard">
      { Assignments && <SmallAssignmentList Assignments={Assignments} header="Assignments"/> }
      <RefLink path="/assignments" text="View All"/>
      { Classes && <ClassList Classes={Classes} header="Classes"/>}
      <RefLink path="/classes/edit" text="Edit"/>
    </div>
  );
}
 
export default Dashboard; 