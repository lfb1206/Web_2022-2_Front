import NavBar from './miscelaneos/NavBar';
import Usuario from './miscelaneos/Usuario';
import '../assets/styles/perfil.css';
import useCookieAuth from '../hooks/useCookieAuth';
import useTokenAuth from "../hooks/useTokenAuth";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { SERVER_URL } from '../App';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

function Perfil() {
    const [user, setUser] = useState(null);
    const { currentUser, handleUserLogout } = useCookieAuth();
    const { handleTokenChange } = useTokenAuth();
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [texto, setTexto] = React.useState("");

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const url = `${SERVER_URL}/perfil/show`;
        axios.get(url).then((response) => {
        setUser(response.data);
        }).catch(err => {
            setOpen(true);
            setTexto(err.response.data.detail);
        });
    }, []);
    
    if (user === null) {
        return <>Still loading...</>;
    }

    const deleteUser = async () => {
        const url = `${SERVER_URL}/perfil/delete`;
        await axios.delete(url).then(
            (response) => {
                console.log(response);
                handleUserLogout();
                handleTokenChange('', 'logout');
                navigate("/login");
            }
        ).catch(err => {
            setOpen(true);
            setTexto(err.response.data.detail);
        });
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
            <Usuario username = {user.username} avatar = {user.avatar} mail = {user.email} wins = {user.victorias} played = {user.jugadas} nivel = {user.nivel} eliminar = {deleteUser}></Usuario>
    </div>
}

export default Perfil;