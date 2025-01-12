import React, { useState, useEffect } from 'react'; 
import Lista from './components/lista'; 
import Detalles from './components/detalles'; 
import alumnosData from './alumnos.json'; 
import './alumnos.css'; 


const App = () => {
    const [students, setStudents] = useState([]);//guardar la lista de los alumnos
    const [selectedStudent, setSelectedStudent] = useState(null);//almacena los estudiantes seleccionados 

    useEffect(() => {
        setStudents(alumnosData.alumnos);
    }, []); 
    return (
        <div className="App">
            <Lista students={students} onSelectStudent={setSelectedStudent} />
            {selectedStudent && <Detalles student={selectedStudent} />}
        </div>
    );
};

export default App;
