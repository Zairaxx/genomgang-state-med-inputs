import { useState } from "react";

const StudentForm = ({addStudent}) => {

    const [name,setName] = useState("");

    const handleNameInput = (event) => {
    setName(event.target.value);
  }

    return(
        <>
            <input type="text" onChange={handleNameInput}/>
            <button onClick={() => {addStudent(name)}}>Lägg till</button>
        </>
    )
}

export default StudentForm

