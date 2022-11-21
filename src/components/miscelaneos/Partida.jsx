function Partida(props) {
    return <div className="column-turno">
        <div className="info-partida">
            <h4>Partida {props.info.id}</h4>
            <b>Maximo jugadores</b><p>{props.info.cantidad_jugadores}</p>
            <b>Conectados</b><p>{props.info.conectados}</p>
            <b>Puntos Victoria</b><p>{props.info.puntos_victoria}</p>
            <button onClick={(e) => props.unirse(e.target.id)} className="btn" id={props.info.id}>Unirse</button>
        </div>
    </div>
}

export default Partida;