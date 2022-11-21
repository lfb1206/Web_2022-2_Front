import '../../assets/styles/cuadro.css'

function Contenido(props) {
    const objects = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ]
    
    props.objetos[1].forEach((objeto, index) => {
        objeto.forEach( (texto) => {
            if (texto === '') {
                objects[index].push("")
            } else {
                objects[index].push(<img src={"./../imgs/" + texto + ".png"} className="cont-img-contenido" alt=""/>)
            }
        })
    });

    const nums = {};
    
    Object.keys(props.numeros).forEach((llave) => {
        if (props.numeros[llave] === 'saqueador') {
            nums[llave] = <img src={"./../imgs/" + props.numeros[llave] + ".png"} className="cont-img-contenido" alt=""/>
        } else {
            nums[llave] = props.numeros[llave]
        }
    });

    return <div className="contenedor-objetos">
            <div className="contenedor-imgs-1">
                <div className={"objetos ob-" + props.objetos[0][0][0]}>
                    {objects[0][0]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][0][1]}>
                    {objects[0][1]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][0][2]}>
                    {objects[0][2]}
                </div>
            </div>
            <div className="contenedor-imgs-2">
                <div className={"objetos ob-" + props.objetos[0][1][0]}>
                    {objects[1][0]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][1][1]}>
                    {objects[1][1]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][1][2]}>
                    {objects[1][2]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][1][3]}>
                    {objects[1][3]}
                </div>
            </div>
            <div className="contenedor-imgs-1">
                <div className="numero">
                    {nums[1]}
                </div>
                <div className="numero">
                    {nums[2]}
                </div>
                <div className="numero">
                    {nums[3]}
                </div>
            </div>
            <div className="contenedor-imgs-2">
                <div className={"objetos ob-" + props.objetos[0][2][0]}>
                    {objects[2][0]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][2][1]}>
                    {objects[2][1]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][2][2]}>
                    {objects[2][2]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][2][3]}>
                    {objects[2][3]}
                </div>
            </div>
            <div className="contenedor-imgs-3">
                <div className={"objetos ob-" + props.objetos[0][3][0]}>
                    {objects[3][0]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][3][1]}>
                    {objects[3][1]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][3][2]}>
                    {objects[3][2]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][3][3]}>
                    {objects[3][3]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][3][4]}>
                    {objects[3][4]}
                </div>
            </div>
            <div className="contenedor-imgs-2">
                <div className="numero">
                    {nums[4]}
                </div>
                <div className="numero">
                    {nums[5]}
                </div>
                <div className="numero">
                    {nums[6]}
                </div>
                <div className="numero">
                    {nums[7]}
                </div>
            </div>
            <div className="contenedor-imgs-3">
                <div className={"objetos ob-" + props.objetos[0][4][0]}>
                    {objects[4][0]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][4][1]}>
                    {objects[4][1]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][4][2]}>
                    {objects[4][2]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][4][3]}>
                    {objects[4][3]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][4][4]}>
                    {objects[4][4]}
                </div>
            </div>
            <div className="contenedor-imgs-4">
                <div className={"objetos ob-" + props.objetos[0][5][0]}>
                    {objects[5][0]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][5][1]}>
                    {objects[5][1]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][5][2]}>
                    {objects[5][2]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][5][3]}>
                    {objects[5][3]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][5][4]}>
                    {objects[5][4]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][5][5]}>
                    {objects[5][5]}
                </div>
            </div>
            <div className="contenedor-imgs-3">
                <div className="numero">
                    {nums[8]}
                </div>
                <div className="numero">
                    {nums[9]}
                </div>
                <div className="numero">
                    {nums[10]}
                </div>
                <div className="numero">
                    {nums[11]}
                </div>
                <div className="numero">
                    {nums[12]}
                </div>
            </div>
            <div className="contenedor-imgs-4">
                <div className={"objetos ob-" + props.objetos[0][6][0]}>
                    {objects[6][0]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][6][1]}>
                    {objects[6][1]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][6][2]}>
                    {objects[6][2]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][6][3]}>
                    {objects[6][3]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][6][4]}>
                    {objects[6][4]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][6][5]}>
                    {objects[6][5]}
                </div>
            </div>
            <div className="contenedor-imgs-3">
                <div className={"objetos ob-" + props.objetos[0][7][0]}>
                    {objects[7][0]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][7][1]}>
                    {objects[7][1]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][7][2]}>
                    {objects[7][2]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][7][3]}>
                    {objects[7][3]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][7][4]}>
                    {objects[7][4]}
                </div>
            </div>
            <div className="contenedor-imgs-2">
                <div className="numero">
                    {nums[13]}
                </div>
                <div className="numero">
                    {nums[14]}
                </div>
                <div className="numero">
                    {nums[15]}
                </div>
                <div className="numero">
                    {nums[16]}
                </div>
            </div>
            <div className="contenedor-imgs-3">
                <div className={"objetos ob-" + props.objetos[0][8][0]}>
                    {objects[8][0]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][8][1]}>
                    {objects[8][1]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][8][2]}>
                    {objects[8][2]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][8][3]}>
                    {objects[8][3]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][8][4]}>
                    {objects[8][4]}
                </div>
            </div>
            <div className="contenedor-imgs-2">
                <div className={"objetos ob-" + props.objetos[0][9][0]}>
                    {objects[9][0]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][9][1]}>
                    {objects[9][1]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][9][2]}>
                    {objects[9][2]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][9][3]}>
                    {objects[9][3]}
                </div>
            </div>
            <div className="contenedor-imgs-1">
                <div className="numero">
                    {nums[17]}
                </div>
                <div className="numero">
                    {nums[18]}
                </div>
                <div className="numero">
                    {nums[19]}
                </div>
            </div>
            <div className="contenedor-imgs-2">
                <div className={"objetos ob-" + props.objetos[0][10][0]}>
                    {objects[10][0]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][10][1]}>
                    {objects[10][1]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][10][2]}>
                    {objects[10][2]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][10][3]}>
                    {objects[10][3]}
                </div>
            </div>
            <div className="contenedor-imgs-1">
                <div className={"objetos ob-" + props.objetos[0][11][0]}>
                    {objects[11][0]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][11][1]}>
                    {objects[11][1]}
                </div>
                <div className={"objetos ob-" + props.objetos[0][11][2]}>
                    {objects[11][2]}
                </div>
            </div>
        </div>
}

export default Contenido;