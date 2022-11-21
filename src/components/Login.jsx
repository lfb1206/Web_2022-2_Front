import NavBar from './miscelaneos/NavBar';
import '../assets/styles/login.css';
import switchSignup from '../assets/scripts/switch.js';
import refreshPage from '../assets/scripts/reload.js';
import useTokenAuth from '../hooks/useTokenAuth';
import useCookieAuth from '../hooks/useCookieAuth';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from '../App';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

function Login(props) {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [confirmation, setConfirmation] = useState("");
    const { handleUserLogin } = useCookieAuth(); 
    const { handleTokenChange } = useTokenAuth();
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [texto, setTexto] = React.useState("");

    const handleClose = () => {
        setOpen(false);
    };

    const userValidation = async (e) => {
        e.preventDefault();
        const response = await axios.post(`${SERVER_URL}/auth/login`, {
            "email": mail,
            "password": password
        }).catch(err => {
            setOpen(true);
            setTexto(err.response.data.detail);
        });
        console.log(response.data)
        if (!response.data.error) {
            handleTokenChange(response.data['token'], 'login');
            handleUserLogin();
            if (response.data.admin) {
                navigate('/admin');
            } else {
                navigate('/');
            }
        }
    };

    const userCreation = async (e) => {
        e.preventDefault();
        const response = await axios.post(`${SERVER_URL}/auth/signup`, {
            "username": username,
            "email": mail,
            "password": password
        }).catch(err => {
            setOpen(true);
            setTexto(err.response.data.detail);
        });
        if (!response.data.error) {
            handleTokenChange(response.data['token'], 'login');
            handleUserLogin();
            navigate('/');
        }
    };
    
    const handleChange = (e) => {
        let check = /^\S+@\S+\.\S+$/;
        let passValidation = /(?=.*[!#@$^%*])[a-zA-Z0-9!#@$%*^]{8,100}$/;
    
        switch (e.target.name) {
            case "username": (e.target.value.length <= 4 && e.target.value !== '')
                ? e.target.setCustomValidity("Nombre de usuario debe contener más de 4 caracteres")
                : e.target.setCustomValidity("")
                setUsername(e.target.value)
                break;
    
            case "email": (check.test(e.target.value) || e.target.value === '')
                ? e.target.setCustomValidity("")
                : e.target.setCustomValidity("Por favor ingrese un mail valido")
                setMail(e.target.value)
                break;
    
            case "password":
                !e.target.value.match(passValidation)?
                e.target.setCustomValidity("La contraseña debe conterner más de 7 caracteres y un caracter especial (! # @ $ %)"):
                e.target.value !== document.getElementsByName("confirmation")[0].value ?
                e.target.setCustomValidity("Las contraseñas no coinciden")
                : e.target.setCustomValidity("")
                setPassword(e.target.value);
                break;

            case "confirmation":
                !e.target.value.match(passValidation)?
                e.target.setCustomValidity("La contraseña debe conterner más de 7 caracteres y un caracter especial (! # @ $ %)"):
                e.target.value !== document.getElementsByName("password")[0].value ?
                e.target.setCustomValidity("Las contraseñas no coinciden")
                : e.target.setCustomValidity("")
                setConfirmation(e.target.value);
                break;
    
            default:
                break;
    
        }
    
    }

    
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
        <section className="left-section">
            <div id="left-cover" className="cover cover-hide">
                <img src="./imgs/cover.png" alt="" />
                <h1>¡ Hola !</h1>
                <h3>¿ Ya tienes una cuenta ?</h3>
                <button type="button" className="switch-btn" onClick={refreshPage}>Iniciar Sesion</button>
            </div>
            <div id="left-form" className="form fade-in-element">
                <h1>Iniciar Sesion</h1>
                <form onSubmit={userValidation}>
                    <input type="text" className="input-box" placeholder="Mail" value={mail} onChange={(e) => setMail(e.target.value)} required />
                    <input type="password" className="input-box" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <input type="submit" name="login-btn" className="btn" value="Iniciar Sesion"/>
                </form>
            </div>
        </section>

        <section className="right-section">
            <div id="right-cover" className="cover fade-in-element">
                <img src="./imgs/cover.png" alt="" />
                <h1>¡ Hola !</h1>
                <h3>¿ No tienes una cuenta ?</h3>
                <button type="button" className="switch-btn" onClick={switchSignup}>Registrarme</button>
            </div>
            <div id="right-form" className="form form-hide">
                <h1>Registrarme</h1>
                <form onSubmit={userCreation}>
                    <input type="text" className="input-box" placeholder="Nombre de Usuario" value={username} name="username" onChange={handleChange} required/>
                    <input type="email" className="input-box" placeholder="Mail" value={mail} name="email" onChange={handleChange} required />
                    <input type="password" className="input-box" placeholder="Contraseña" value={password} name="password" onChange={handleChange} required/>
                    <input type="password" className="input-box" placeholder="Confirmar Contraseña" value={confirmation} name="confirmation" onChange={handleChange} required />
                    <input type="submit" name="signup-btn" className="btn" value="Registrarme"/>
                </form>
            </div>
        </section>
    </div>
}

export default Login;