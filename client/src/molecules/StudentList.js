const StudentList = ({class_id}) => {
  const pagedata = {
    Classroom: [
      {
        _id: "1",
        name:"SCH4UE-01", 
        ib:true,
        assignments: ["1", "2"],
        students:["1234567890", "2345678901", "9876543210", "3456789012", "4567890123"],
      },
      {
        _id: "2",
        name:"SPH4UE-01", 
        ib:true,
        assignments: ["3", "4"],
        students:["1234567890", "2345678901", "9876543210", "5678901234", "6789012345"],
      },
    ],
    Assignments: [
      {
        _id:"1",
        name:"Enthalpy of Combustion Lab",
        markbanded:false
      },
      {
        _id:"2",
        name:"Organic Chemistry Test",
        markbanded:true
      },
      {
        _id:"3", 
        name:"group 3 reflection",
        scores:3,
        markbanded:false
      },
      {
        _id:"4", 
        name:"chem ia",
        scores:3,
        markbanded:true
      }
    ],
    Students: [
      {
        student_number:"1234567890",
        first_name:"Methira",
        last_name:"Herath",
        grade:"12"
      },
      {
        student_number:"2345678901",
        first_name:"Abel",
        last_name:"Diress",
        grade:"12"
      },
      {
        student_number:"3456789012",
        first_name:"Bilal",
        last_name:"Shaikh",
        grade:"12"
      },
      {
        student_number:"9876543210",
        first_name:"Andy",
        last_name:"Deng",
        grade:"12"
      },
      {
        student_number:"4567890123",
        first_name:"Mr.",
        last_name:"Quast",
        grade:"12"
      },
      {
        student_number:"5678901234",
        first_name:"meow",
        last_name:"asdok",
        grade:"12"
      },
      {
        student_number:"6789012345",
        first_name:"meth",
        last_name:"aopsjdaopjd",
        grade:"12"
      }
    ]
  };
  // replace with get /classroom/{class_id}
  const classroom = pagedata.Classroom.find((c) => c._id === class_id);
  return (
    <div>
      <h2> Students </h2>
      {classroom.students.map((student_id) => {
        // replace with get /student/{student_id}
        const student = pagedata.Students.find((s) => s.student_number === student_id);
        return (
          <div className="student-list" key={student_id}>
            <h2>{student.first_name} {student.last_name}</h2>
          </div>
        );
      })}
    </div> 
  );
}
 
export default StudentList;