const StudentList = (props) => {
    return(
        <>
            <h2>Elevlista</h2>
            <ul>
                {props.students.map(student => <li>{student}</li>)}
            </ul>
        </>
    )
}

export default StudentList