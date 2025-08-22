import { useState } from 'react'
import './App.css'
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';

function App() {

  const [students, setStudents] = useState(["Brandon","Julia","Mia","August"])
  
  const addStudent = (studentName) => {

    //Gör en kopia av state och uppdatera
    //Alternativ 1

      let updatedStudents = [...students];
      updatedStudents.push(studentName);
    //Uppdatera state
      setStudents(updatedStudents)

    // //Alternativ 2
    // setStudents([...students, name])
  }

  return (
    <>
      <StudentForm addStudent={addStudent}/>
      <StudentList students={students}/>
    </>
  )
}

export default App
