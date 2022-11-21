function Jugador(props) {
    return <div className={props.class}>
        <h2>{props.info_jug.username}</h2>
        <b>Cartas Materiales: {props.info_jug.materiales}</b><p></p>
        {/* <b>Cartas Desarrollo: {props.info_jug.desarrollo}</b><p></p> */}
        <b>Puntos de Victoria: {props.info_jug.puntos}</b><p></p>
        <b>Enanos: {props.info_jug.enanos}</b><p></p>
        <b>Caminos Construidos: {props.info_jug.cam}</b><p></p>
    </div>
}

export default Jugador;