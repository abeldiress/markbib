import StudentList from '../atoms/StudentList'
import { useParams} from "react-router-dom"

const Classes = () => {
  const { class_id } = useParams()
  return ( 
    <StudentList class_id={class_id}/>
  );
}
 
export default Classes;
