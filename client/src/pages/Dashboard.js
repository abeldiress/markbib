import RefLink from "../atoms/RefLink";
const Dashboard = () => {
  // const {data: Classes} = useFetch('http://localhost:5000/teacher/{uuid}')
  // const {data: Assignments} = useFetch('http://localhost:5000/Assignments')
  const pagedata = {
    Classes: [
      {
        _id:1, 
        name:"chem", 
        ib:true,
        list_assignments: [1, 2, 3],
        list_students: [123456789, 234567891, 123456780],
        meow: 7534987598347598
      },
      {
        _id:2,
        name:"physics",
        ib:true,
        list_assignments: [4],
        list_students: [123456789, 234567891, 123456780],
        meow: 123123123
      }
    ],
    Assignments: [
      {
        _id:1,
        name:"chem lab",
        scores:0
      },
      {
        _id:2,
        name:"organic chem test",
        scores:2
      },
      {
        _id:3, 
        name:"group 3 reflection",
        scores:3
      },
      {
        _id:4, 
        name:"group 3 reflection",
        scores:3
      }
    ]
  }
  return (
    <div>
      <h1> Assignments </h1>
      {pagedata.Assignments.map((Assignment) => (

        <div key={Assignment._id}>
          <h2>{Assignment.name}</h2>
          {pagedata.Classes.map((Class) => (
            <div key={Class.meow}>
              {Class.list_assignments.includes(Assignment._id) && <RefLink path={`../class/${Class._id}`} text={Class.name}/>}
              <h3> {Assignment.scores} / {Class.list_students.length} rubrics </h3>
            </div>
          ))}
        </div>
      ))}
      <h1> Classes </h1>
      {pagedata.Classes.map((Class) => (
        <div key={Class._id}>
          <RefLink path={`../class/${Class._id}`} text={Class.name}/>
          <h2> { Class.name } </h2>
          <h3> { Class.list_assignments.length } assignments </h3>
          <h3> { Class.list_students.length} students </h3>
        </div>
      ))}
    </div> 

  );
}
 
export default Dashboard; 