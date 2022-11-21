import NavBar from './miscelaneos/NavBar';
import '../assets/styles/config.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from '../App';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

function Config(props) {
    const navigate = useNavigate();
    const [match, setMatch] = useState(null);
    const [inputs, setInputs] = useState({});
    const [open, setOpen] = React.useState(false);
    const [texto, setTexto] = React.useState("");

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        event.target.setCustomValidity("");
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (Object.keys(inputs).length !== 3 || Object.values(inputs).includes('')) {
            alert(`Faltan parametros para crear la partida`);
        } else {
            const url = `${SERVER_URL}/config`;
    
            await axios.post(url, inputs)
                .then((response) => {
                    setMatch(response.data);
                }).catch(err => {
                    setOpen(true);
                    setTexto(err.response.data.detail);
                });
        }

    };

    useEffect(() => {
        if (match !== null) {
            navigate(`./../juego/${match}`);
        }
    });

    return <div>
        <NavBar/>
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
        <div className="config">
            <h1>
            Configuración de Partida
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="elementos-form">
                    <div className="elemento-form">
                        <h2>Cantidad de jugadores</h2>
                        <select name={"cantidad_jugadores"} value={inputs.cantidad_jugadores || ""} onChange={handleChange} required onInvalid={((e) => e.target.setCustomValidity('Escoja una cantidad de jugadores'))}>
                            <option value="">Escoge cantidad</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className="elemento-form">
                        <h2>Duración deseada por turno</h2>
                        <select name={"tiempo_turno"} value={inputs.tiempo_turno  || ""} onChange={handleChange} required onInvalid={((e) => e.target.setCustomValidity('Escoja la duración de cada turno'))}>
                            <option value="">Escoge duración</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </div>
                    <div className="elemento-form">
                        <h2>Puntos para ganar</h2>
                        <input type="number" name="puntos_victoria" id="cars" min="8" max="25" value={inputs.puntos_victoria || ""} onChange={handleChange} required onInvalid={((e) => e.target.setCustomValidity('Escoja una cantidad de puntos para ganar'))}></input>
                    </div>
                </div>
                <div className="elementos-form">
                    <input type="submit" className="btn" value="Crear" />
                </div>
            </form>
        </div>
    </div>
}

export default Config;