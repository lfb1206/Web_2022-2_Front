import handleClick from '../../assets/scripts/select.js';
import Hex from './Hex';
import Contenido from './Contenido';
import Seleccionador from './Seleccionador';
import Acciones from './Acciones';
import React, { useState } from 'react';
import axios from 'axios';
import { SERVER_URL } from '../../App';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

function Tablero(props) {
    const matchId = useParams().id;
    const [accion, setAccion] = useState("");
    const [z, setZ] = useState('');
    const [w, setW] = useState('');
    const string_int = {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        '11': 11,
        '12': 12,
        '13': 13,
        '14': 14,
        '15': 15,
        '16': 16,
        '17': 17,
        '18': 18,
    }
    const [open, setOpen] = React.useState(false);
    const [texto, setTexto] = React.useState("");

    const handleClose = () => {
        setOpen(false);
    };

    let etapa = 'buy';
    const utilizable = [props.utilizable, props.utilizable];

    if (!props.iniciada) {
        utilizable[0] = true;
        etapa = 'place';
    } else {
        etapa = 'buy';
    }

    const handleAccionObjeto = async (info) => {
        console.log(z, w);
        console.log(info);
        const response = await axios.post(`${SERVER_URL}/juego/${matchId}/${etapa}`, {
            "accion": accion,
            "x": string_int[info[0]],
            "y": string_int[info[1]],
            "x2": string_int[z],
            "y2": string_int[w]
        }).catch(err => {
            setOpen(true);
            setTexto(err.response.data.detail);
            setAccion('');
            setZ('');
            setW('');
        });
        if (!response.data.error) {
            props.grilla();
        }
        setAccion('');
        setZ('');
        setW('');
    };

    const handleAccionActivar = async (info) => {
        const response = await axios.post(`${SERVER_URL}/juego/${matchId}/activate`, {
            "x": string_int[info[0]],
            "y": string_int[info[1]]
        }).catch(err => {
            setOpen(true);
            setAccion('');
            setTexto(err.response.data.detail);
        });
        if (!response.data.error) {
            props.grilla();
            setAccion("");
        }
    };

    const handleAccionMejorar = async (info) => {
        const response = await axios.post(`${SERVER_URL}/juego/${matchId}/upgrade`, {
            "x": string_int[info[0]],
            "y": string_int[info[1]]
        }).catch(err => {
            setOpen(true);
            setAccion('');
            setTexto(err.response.data.detail);
        });
        if (!response.data.error) {
            props.grilla();
            setAccion("");
        }
    };

    const handleAccionMover = async (info) => {
        const response = await axios.post(`${SERVER_URL}/juego/${matchId}/move`, {
            "accion": accion,
            "x": string_int[info[0]],
            "y": string_int[info[1]],
            "x2": string_int[z],
            "y2": string_int[w]
        }).catch(err => {
            setOpen(true);
            setAccion('');
            setZ('');
            setW('');
            setTexto(err.response.data.detail);
        });
        if (!response.data.error) {
            if (response.data.detail) {
                setOpen(true);
                setTexto(response.data.detail);
            }
            props.grilla();
            setAccion('');
            setZ('');
            setW('');
        }
    };

    const handleClick1 = (e) => {
        switch (e.target.name) {
            case "casilla":
                const info = e.target.id.split(",");
                if (accion === "riel" || accion === "mover") {
                    if (z === '') {
                        setZ(info[0]);
                        setW(info[1]);
                    } else {
                        if (accion === "mover") {
                            handleAccionMover(info);
                            handleClick();
                        } else {
                            handleClick();
                            handleAccionObjeto(info);
                        }
                    }
                } else {
                    handleClick();
                    if (accion === "activar") {
                        handleAccionActivar(info);
                    } else if (accion === "mejorar") {
                        handleAccionMejorar(info);
                    } else  {
                        handleAccionObjeto(info);
                    }
                }
                break;
    
            case "accion":
                setAccion(e.target.id);
                handleClick();
                break;
    
            default:
                break;
    
        }
    
    };

    return <>
            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {texto}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cerrar</Button>
                </DialogActions>
            </Dialog>
            {!props.iniciada && <span className="span-inicial">Posicione dos minas y dos rieles</span>}
            {!(props.ganador ==='false') && <span className="span-inicial">Ha ganado {props.ganador}</span>}
            <div className="contenedor-tablero">
                <div className="first-row">
                    <Hex tipo={props.info_tablero.tipo[0]} rieles={props.info_tablero.rieles[0]}></Hex>
                    <Hex tipo={props.info_tablero.tipo[1]} rieles={props.info_tablero.rieles[1]}></Hex>
                    <Hex tipo={props.info_tablero.tipo[2]} rieles={props.info_tablero.rieles[2]}></Hex>
                </div>

                <div className="second-row">
                    <Hex tipo={props.info_tablero.tipo[3]} rieles={props.info_tablero.rieles[3]}></Hex>
                    <Hex tipo={props.info_tablero.tipo[4]} rieles={props.info_tablero.rieles[4]}></Hex>
                    <Hex tipo={props.info_tablero.tipo[5]} rieles={props.info_tablero.rieles[5]}></Hex>
                    <Hex tipo={props.info_tablero.tipo[6]} rieles={props.info_tablero.rieles[6]}></Hex>
                </div>

                <div className="third-row">
                    <Hex tipo={props.info_tablero.tipo[7]} rieles={props.info_tablero.rieles[7]}></Hex>
                    <Hex tipo={props.info_tablero.tipo[8]} rieles={props.info_tablero.rieles[8]}></Hex>
                    <Hex tipo={props.info_tablero.tipo[9]} rieles={props.info_tablero.rieles[9]}></Hex>
                    <Hex tipo={props.info_tablero.tipo[10]} rieles={props.info_tablero.rieles[10]}></Hex>
                    <Hex tipo={props.info_tablero.tipo[11]} rieles={props.info_tablero.rieles[11]}></Hex>
                </div>

                <div className="fourth-row">
                    <Hex tipo={props.info_tablero.tipo[12]} rieles={props.info_tablero.rieles[12]}></Hex>
                    <Hex tipo={props.info_tablero.tipo[13]} rieles={props.info_tablero.rieles[13]}></Hex>
                    <Hex tipo={props.info_tablero.tipo[14]} rieles={props.info_tablero.rieles[14]}></Hex>
                    <Hex tipo={props.info_tablero.tipo[15]} rieles={props.info_tablero.rieles[15]}></Hex>
                </div>

                <div className="fifth-row">
                    <Hex tipo={props.info_tablero.tipo[16]} rieles={props.info_tablero.rieles[16]}></Hex>
                    <Hex tipo={props.info_tablero.tipo[17]} rieles={props.info_tablero.rieles[17]}></Hex>
                    <Hex tipo={props.info_tablero.tipo[18]} rieles={props.info_tablero.rieles[18]}></Hex>
                </div>
                <Contenido objetos={props.info_tablero.contenido.objetos} numeros={props.info_tablero.contenido.numeros}></Contenido>
                <Seleccionador comprar={handleClick1}></Seleccionador>
            </div>
            <Acciones grilla = {props.grilla} lanzar = {props.accion_lanzar} jugada = {props.jugada} deshabilitar = {utilizable} objeto={handleClick1} turno={props.turno} iniciada={props.iniciada}></Acciones>
        </>
}

export default Tablero;