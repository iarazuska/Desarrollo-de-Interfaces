import React from 'react';

function Lista({ students, onSelectStudent }) {
    //mapeo del array
    
    return (
        <ul className="student-list">
            {students.map(student => (
                <li key={student.nombre} onClick={() => onSelectStudent(student)}>
                    {student.nombre}
                </li>
            ))}
        </ul>
    );
}

export default Lista;
