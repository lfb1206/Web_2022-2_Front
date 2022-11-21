function Materiales(props) {
    return <div className="materiales">
            <div className="top">
                <div className="material">
                    <div className="img">
                        <img src="./../imgs/madera.png" className="cont-img-material" alt=""/>
                    </div>
                    <div className="cantidad">
                        <p>{props.info_materiales.wood}</p>
                    </div>
                </div>
                <div className="material">
                    <div className="img">
                        <img src="./../imgs/carbon.png" className="cont-img-material" alt=""/>
                    </div>
                    <div className="cantidad">
                        <p>{props.info_materiales.coal}</p>
                    </div>
                </div>
                {/* <div className="material">
                    <div className="img">
                        <img src="./../imgs/hierro.png" className="cont-img-material" alt=""/>
                    </div>
                    <div className="cantidad">
                        <p>{props.info_materiales.iron}</p>
                    </div>
                </div> */}
            </div>
            <div className="bottom">
                {/* <div className="material">
                    <div className="img">
                        <img src="./../imgs/cartas.png" className="cont-img-material" alt=""/>
                    </div>
                    <div className="cantidad">
                        <p>{props.info_materiales.development}</p>
                    </div>
                </div> */}
                <div className="material">
                    <div className="img">
                        <img src="./../imgs/gold.png" className="cont-img-material" alt=""/>
                    </div>
                    <div className="cantidad">
                        <p>{props.info_materiales.gold}</p>
                    </div>
                </div>
                <div className="material">
                    <div className="img">
                        <img src="./../imgs/piedra.png" className="cont-img-material" alt=""/>
                    </div>
                    <div className="cantidad">
                        <p>{props.info_materiales.rock}</p>
                    </div>
                </div>
                <div className="material">
                    <div className="img">
                        <img src="./../imgs/cobre.png" className="cont-img-material" alt=""/>
                    </div>
                    <div className="cantidad">
                        <p>{props.info_materiales.copper}</p>
                    </div>
                </div>
                {/* <div className="material">
                    <div className="img">
                        <img src="./../imgs/diamante.png" className="cont-img-material" alt=""/>
                    </div>
                    <div className="cantidad">
                        <p>{props.info_materiales.diamond}</p>
                    </div>
                </div>
                <div className="material">
                    <div className="img">
                        <img src="./../imgs/ruby.png" className="cont-img-material" alt=""/>
                    </div>
                    <div className="cantidad">
                        <p>{props.info_materiales.ruby}</p>
                    </div>
                </div> */}
            </div>
        </div>
}

export default Materiales;