function PartidaUser(props) {
    return <div className="column-turno">
        <div className="info-partida">
            <h4>Partida {props.info.id}</h4>
            <b>Conectados</b><p>{props.info.conectados}</p>
            <b>Puntos Victoria</b><p>{props.info.puntos_victoria}</p>
            <a onClick={(e) => props.unirse(e.target.id)} href={"/juego/" + props.info.id} className="btn" id={props.info.id}>Unirse</a>
        </div>
        <button className="btn" onClick={(e) => props.eliminar(e.target.id)} href={"/partidas"} id={props.info.id}>Eliminar</button>
    </div>
}

export default PartidaUser;