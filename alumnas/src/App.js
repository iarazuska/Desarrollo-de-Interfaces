import React, { useState, useEffect } from 'react';
import alumnosData from './alumnos.json'; // Importación correcta de los datos
import './alumnos.css'; // Importación de los estilos

// Componente para listar estudiantes
function Lista({ students, onSelectStudent }) {
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

// Componente para mostrar detalles del estudiante seleccionado
function Detalles({ student }) {
    return (
        <div>
            <h2>Detalles de {student.nombre}</h2>
            <div>
                {Object.entries(student.asignaturas).map(([key, value]) => (
                    <p key={key}>{key}: Promedio {value.promedio.toFixed(2)}</p> // Muestra las asignaturas y sus promedios
                ))}
            </div>
        </div>
    );
}

// Componente principal App
const App = () => {
    const [students, setStudents] = useState([]); // Almacena los estudiantes
    const [selectedStudent, setSelectedStudent] = useState(null); // Almacena el estudiante seleccionado
    const [sortKey, setSortKey] = useState('nombre'); // Clave de ordenación inicial
    const [searchTerm, setSearchTerm] = useState(''); // Término de búsqueda

    useEffect(() => {
        const sortedStudents = ordenar(alumnosData.alumnos, sortKey); // Ordena inicialmente los estudiantes
        setStudents(sortedStudents);
    }, []);

    // Función para ordenar estudiantes según la clave
    const ordenar = (students, key) => {
        return students.slice().sort((a, b) => {
            if (key === 'nombre') {
                return a.nombre.localeCompare(b.nombre);
            } else if (key === 'promedio') {
                return calcular(b.asignaturas) - calcular(a.asignaturas);
            }
        });
    };

    // Calcula el promedio de las asignaturas de un estudiante
    const calcular = (asignaturas) => {
        const total = Object.values(asignaturas).reduce((acc, curr) => acc + curr.promedio, 0);
        return total / Object.keys(asignaturas).length;
    };

    // Gestiona cambios en el selector de ordenación
    const cambiosDeOrden = (e) => {
        setSortKey(e.target.value);
        const sortedStudents = ordenar(students, e.target.value);
        setStudents(sortedStudents);
    };

    // Gestiona cambios en el campo de búsqueda
    const buscar = (e) => {
        setSearchTerm(e.target.value);
    };

    // Filtra estudiantes según el término de búsqueda
    const filtrar = () => {
        return students.filter(student =>
            student.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            Object.entries(student.asignaturas).some(([key, val]) => key.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    };

    return (
        <div className="App">
            <select onChange={cambiosDeOrden} value={sortKey}>
                <option value="nombre">Ordenar por Nombre</option>
                <option value="promedio">Ordenar por Promedio</option>
            </select>
            <input 
                type="text" 
                placeholder="Buscar por nombre o asignatura..." 
                value={searchTerm}
                onChange={buscar}
            />
            <Lista students={filtrar()} onSelectStudent={setSelectedStudent} />
            {selectedStudent && <Detalles student={selectedStudent} />}
        </div>
    );
};

export default App;
