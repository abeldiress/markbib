const Dashboard = () => {
  // const {data: Classes} = useFetch('http://localhost:5000/teacher/{uuid}')
  // const {data: Assignments} = useFetch('http://localhost:5000/Assignments')
  const pagedata = {
    Classes: [
      {
        id:1, 
        name:"chem", 
        ib:true,
        list_assignments: [1, 2, 3],
        list_students: [123456789, 234567891, 123456780],
        meow: 7534987598347598
      },
      {
        id:2,
        name:"physics",
        ib:true,
        list_assignments: [4],
        list_students: [123456789, 234567891, 123456780],
        meow: 123123123
      }
    ],
    Assignments: [
      {
        id:1,
        name:"chem lab",
        scores:0
      },
      {
        id:2,
        name:"organic chem test",
        scores:2
      },
      {
        id:3, 
        name:"group 3 reflection",
        scores:3
      },
      {
        id:4, 
        name:"group 3 reflection",
        scores:3
      }
    ]
  }
  return (
    // <div>
    //   {pagedata.Classes.map((Class) => (
    //     <div key={Class.id}>
    //       {pagedata.Assignments.map((Assignment) => (
    //         <div key={Assignment.id}>
    //           <h2>{Assignment.name}</h2>
    //             {Class.list_assignments.includes(Assignment.id) && <h3>{Class.name}</h3>}
    //         </div>
    //         ))}
    //     </div>
    //   ))}
    // </div>

    <div>
      <h1> Assignments </h1>
      {pagedata.Assignments.map((Assignment) => (

        <div key={Assignment.id}>
          <h2>{Assignment.name}</h2>
          {pagedata.Classes.map((Class) => (
            <div key={Class.meow}>
              {Class.list_assignments.includes(Assignment.id) && <h3>{Class.name}</h3>}
              <h3> {Assignment.scores} / {Class.list_students.length} rubrics </h3>
            </div>
          ))}
        </div>
      ))}
      <h1> Classes </h1>
      {pagedata.Classes.map((Class) => (
        <div key={Class.id}>
          <h2> { Class.name } </h2>
          <h3> { Class.list_assignments.length } assignments </h3>
          <h3> { Class.list_students.length} students </h3>
        </div>
      ))}
    </div> 

  );
}
 
export default Dashboard; 