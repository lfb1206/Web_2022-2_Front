function Usuario(props) {
    console.log(props);
    return <div className="contenedor-perfil">
                <div className="contenedor-izq">
                    <div className="nombre">
                        <h1>
                            {props.username.toUpperCase()}
                        </h1>
                    </div>
                    <img src="./imgs/perfil.svg" className="foto" alt="" />
                </div>
                <div className="contenedor-cent">
                    <div className="datos">
                        <b>Mail</b><p>{props.mail}</p>
                        {/* <b><button className="btn">Cambiar Contraseña</button></b><p></p> */}
                        <b><button onClick={props.eliminar} className="btn">Eliminar cuenta</button></b><p></p>
                    </div>
                </div>
                <div className="contenedor-der">
                    <div className="datos">
                        <b>Partidas ganadas</b><p>{props.wins}</p>
                        {/* <b>Partidas jugadas</b><p>{props.played}</p> */}
                        <b>Nivel</b><p>{props.nivel}</p>
                    </div>
                </div>
            </div>
}

export default Usuario;