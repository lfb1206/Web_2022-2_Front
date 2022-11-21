import React, { useEffect, useState } from 'react';
import '../../assets/styles/cuadro.css'

function Acciones(props) {
    const [ terminar, setTerminar ] = useState(props.turno || !props.deshabilitar[1]);
    const [ lanzar, setLanzar ] = useState(!props.deshabilitar[1] || !props.turno);

    useEffect(() => {
        setTerminar(props.turno || !props.deshabilitar[1]);
        setLanzar(!props.deshabilitar[1] || !props.turno);
    }, [props.turno, props.deshabilitar[1]]);

    return <div className="cont-acciones">
                <h3>Menú de Acciones</h3>
                <details className="detalles-acciones">  
                    <summary>
                        Construir
                    </summary>
                    <b><button className="btn-juego" onClick={props.objeto} disabled={!props.deshabilitar[0]} name="accion" id="riel">Riel de Tren</button></b>
                    <b>
                        <div className="contenedor-costos">
                            <h4>Costo</h4>
                            <div className="img">
                                <img src="./../imgs/madera.png" className="cont-img-material" alt=""/>
                            </div>
                            <div className="img">
                                <img src="./../imgs/piedra.png" className="cont-img-material" alt=""/>
                            </div>
                        </div>
                    </b>
                    <b><button className="btn-juego" onClick={props.objeto} disabled={!props.deshabilitar[0]} name="accion" id="mina">Mina</button></b>
                    <b>
                        <div className="contenedor-costos">
                            <h4>Costo</h4>
                            <div className="img">
                                <img src="./../imgs/madera.png" className="cont-img-material" alt=""/>
                            </div>
                            <div className="img">
                                <img src="./../imgs/gold.png" className="cont-img-material" alt=""/>
                            </div>
                        </div>
                    </b>
                    <b><button className="btn-juego" onClick={props.objeto} disabled={!props.deshabilitar[1]} name="accion" id="industria">Industria</button></b>
                    <b>
                        <div className="contenedor-costos">
                            <h4>Costo</h4>
                            <div className="img">
                                <img src="./../imgs/cobre.png" className="cont-img-material" alt=""/>
                            </div>
                            <div className="img">
                                <img src="./../imgs/cobre.png" className="cont-img-material" alt=""/>
                            </div>
                        </div>
                    </b>
                    <b>
                        <div className="contenedor-costos">
                            <div className="img">
                                <img src="./../imgs/carbon.png" className="cont-img-material" alt=""/>
                            </div>
                            <div className="img">
                                <img src="./../imgs/carbon.png" className="cont-img-material" alt=""/>
                            </div>
                            <div className="img">
                                <img src="./../imgs/gold.png" className="cont-img-material" alt=""/>
                            </div>
                        </div>
                    </b>
                    {/* <b><button className="btn-juego" onClick={props.objeto} disabled={!props.deshabilitar[1]} name="accion" id="acuñadura">Acuñadura</button></b> */}
                </details>
                {props.iniciada && <details className="detalles-acciones">  
                    <summary>
                        Acciones enanos
                    </summary>
                    <b><button className="btn-juego" onClick={props.objeto} disabled={!props.deshabilitar[1]} name="accion" id="enano">Comprar</button></b>
                    <b>
                        <div className="contenedor-costos">
                            <h4>Costo</h4>
                            <div className="img">
                                <img src="./../imgs/cobre.png" className="cont-img-material" alt=""/>
                            </div>
                            <div className="img">
                                <img src="./../imgs/gold.png" className="cont-img-material" alt=""/>
                            </div>
                            <div className="img">
                                <img src="./../imgs/carbon.png" className="cont-img-material" alt=""/>
                            </div>
                        </div>
                    </b>
                    <b><button className="btn-juego" onClick={props.objeto} disabled={!props.deshabilitar[1]} name="accion" id="activar">Activar enano</button></b>
                    <b>
                        <div className="contenedor-costos">
                            <h4>Costo</h4>
                            <div className="img">
                                <img src="./../imgs/gold.png" className="cont-img-material" alt=""/>
                            </div>
                        </div>
                    </b>
                    <b><button className="btn-juego" onClick={props.objeto} disabled={!props.deshabilitar[1]} name="accion" id="mejorar">Mejorar</button></b>
                    <b>
                        <div className="contenedor-costos">
                            <h4>Costo</h4>
                            <div className="img">
                                <img src="./../imgs/piedra.png" className="cont-img-material" alt=""/>
                            </div>
                            <div className="img">
                                <img src="./../imgs/carbon.png" className="cont-img-material" alt=""/>
                            </div>
                        </div>
                    </b>
                    <b><button className="btn-juego" onClick={props.objeto} disabled={!props.deshabilitar[1]} name="accion" id="mover">Mover</button></b>
                    {/* <b><button className="btn-juego" onClick={props.objeto} disabled={!props.utilizable} name="accion" id="desplazar saqueador">Desplazar Saqueador</button></b> */}
                </details> }
                {/* <details>
                    <summary>
                        Opciones Cartas de Desarrollo
                    </summary>
                    <b><button className="btn-juego" value="Iniciar Sesion">Working on this</button></b>
                </details> */}
                {props.iniciada && <button id='roll' className='btn-juego' onClick={props.lanzar} disabled={lanzar}>Lanzar!</button> }
                {/* <button className="btn-juego"  onClick={props.objeto} disabled={props.utilizable} name="accion" id="mover saqueador">Mover Saqueador</button> */}
                {props.iniciada && <button className="btn-juego" onClick={props.jugada} disabled={terminar}>Terminar Turno</button> }
                <button className="btn-juego" onClick={props.grilla}>Actualizar Tablero</button>
                <a className="btn-juego" href="/">Salir</a>
            </div>
}

export default Acciones;