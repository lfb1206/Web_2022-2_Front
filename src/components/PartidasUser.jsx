import PartidaUser from './miscelaneos/PartidaUser';
import NavBar from './miscelaneos/NavBar';
import '../assets/styles/partidas.css';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from '../App';
import refreshPage from '../assets/scripts/reload.js';
import useTokenAuth from '../hooks/useTokenAuth';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

function Partidas() {
    const navigate = useNavigate();
    const { handleTokenChange } = useTokenAuth();
    const [party, setParty] = useState(null);
    const [open, setOpen] = React.useState(false);
    const [texto, setTexto] = React.useState("");

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const url = `${SERVER_URL}/partidas/own`;
        axios.get(url).then((response) => {
        setParty(response.data);
        }).catch(err => {
            setOpen(true);
            setTexto(err.response.data.detail);
        });
    }, []);

    if (party === null) {
        return <>Still loading...</>;
    };

    const join = async (Id) => {
        const url = `${SERVER_URL}/partidas/unir`;
        const body = {
            matchId: Id
        };
        const response = await axios.post(url, body).catch(err => {
            setOpen(true);
            setTexto(err.response.data.detail);
        });
        if (!response.data.error) {
            navigate("/juego/" + Id)
        }
    };

    const eliminar = async (Id) => {
        console.log(1);
        await axios.delete(`${SERVER_URL}/protected/matches/${Id}`,
        { headers: {"Authorization" : `Bearer ${JSON.parse(localStorage.getItem('matches'))}`} }).catch(err => {
            setOpen(true);
            setTexto(err.response.data.detail);
        });
        refreshPage();
    };

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
        <div className="row">
            <div className="row_second">
                <div className="column-head-turno">
                    <a href="/partidas" className="no-seleccionado">Partidas</a>
                    <a href="/partidas/propias" className="seleccionado">Mis partidas</a>
                </div>
            </div>
            <div className="row_second">
                <div className="row_inner">
                    <div className="tile">
                        {party.map((partida) => (
                            <PartidaUser key={partida.id} info={partida} unirse={join} eliminar={eliminar}></PartidaUser>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Partidas;