import React, { useEffect, useState } from 'react';

function Tiempo(props) {
    const [texto, setTexto] = useState("");

    useEffect(() => {
        if (props.tiempo_turno) {
            setTexto("Es tu turno")
        } else {
            setTexto("No es tu turno")
        }
    }, [props.tiempo_turno]);

    return <div className="tiempo" id="timer">
        {texto}
    </div> 
}

export default Tiempo;