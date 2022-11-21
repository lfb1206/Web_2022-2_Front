function Saqueadores(props) {
    return <div className="cont-saqueadores">
            <div className="cont-iconos">
                <img src="./../imgs/fuerza.png" className="cont-icono" alt=""/>
                <h3> : </h3>
                <ion-icon name="shield-outline" size="large" className="cont-icono"></ion-icon>
            </div>
            <div className="cont-iconos">
                <h4> {props.info_saqueadores.fuerza} : {props.info_saqueadores.defensa} </h4>
            </div>
            <div className="cont-iconos">
                <img src="./../imgs/cascobarbaro.png" className="cont-icono" alt=""/>
                <ion-icon name="arrow-forward-sharp" size="large"></ion-icon>
                <img src="./../imgs/hex.png" className="cont-icono" alt=""/>
            </div>
            <div className="cont-iconos">
                <h4> {props.info_saqueadores.turnos_ataque} </h4>
            </div>
        </div>
}

export default Saqueadores;