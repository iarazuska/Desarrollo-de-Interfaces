import React from 'react';

function Detalles({ student }) {
    return (
        <div>
            <h2>Detalles de {student.nombre}</h2>
            <div>{Object.entries(student.asignaturas).map(([key, value]) => (
                <p key={key}>{key}: Promedio {value.promedio.toFixed(2)}</p>
            ))}</div>
        </div>
    );
}

export default Detalles;
