import NavItem from "./miscelaneos/NavItem";
import '../assets/styles/admin.css';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SERVER_URL, SERVER_URL_BACKUP } from '../App';
import refreshPage from '../assets/scripts/reload.js';
import useCookieAuth from '../hooks/useCookieAuth';
import useTokenAuth from '../hooks/useTokenAuth';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

function Admin() {
    const { currentUser, handleUserLogout } = useCookieAuth(); 
    const navigate = useNavigate();
    const { handleTokenChange } = useTokenAuth();
    const [data, setData] = useState([]);
    const [ruta, setRuta] = useState("");
    const [admin, setAdmin] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [texto, setTexto] = React.useState("");

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const url = `${SERVER_URL}/admin/verificar`;
        axios.get(url).then((response) => {
        setAdmin(response.data.admin);
        }).catch(err => {
            setOpen(true);
            setTexto(err.response.data.detail);
        });
    }, []);

    const logout = async () => {
        await axios.post(`${SERVER_URL}/auth/logout`).catch(err => console.log(err)).catch(err => {
            setOpen(true);
            setTexto(err.response.data.detail);
        });
        handleUserLogout();
        navigate("/login");
        handleTokenChange('', 'logout');
    }

    const getPartidas = async () => {
        const url = `${SERVER_URL}/admin/matches`;
        axios.get(url).then((response) => {
        setData((response.data).sort(function(a) {
            return a.id;
        }));
        }).catch(err => {
            setOpen(true);
            setTexto(err.response.data.detail);
        });
        setRuta("deleteMatch");
    };

    const getUsuarios = async () => {
        const url = `${SERVER_URL}/admin/users`;
        axios.get(url).then((response) => {
        setData((response.data).sort(function(a) {
            return a.id;
        }));
        }).catch(err => {
            setOpen(true);
            setTexto(err.response.data.detail);
        });
        setRuta("deleteUser");
    };
    
    const Backup = async () => {
        const url = `${SERVER_URL}/admin/users`;
        const url2 = `${SERVER_URL_BACKUP}`;
        axios.get(url).then((response) => {
        setData((response.data).sort(function(a) {
            return a.id;
        }));
        }).catch(err => {
            setOpen(true);
            setTexto(err.response.data.detail);
        });
        axios.post(url2, data).then((response) => {
            setOpen(true);
            setTexto(response.data.exito);
        }).catch(err => {
            setOpen(true);
            setTexto(err.response.data.detail);
        });
    };

    const eliminar = async (Id) => {
        await axios.delete(`${SERVER_URL}/admin/${ruta}/${Id}`,
        { headers: {"Authorization" : `Bearer ${JSON.parse(localStorage.getItem('matches'))}`} }).catch(err => {
            setOpen(true);
            setTexto(err.response.data.detail);
        });
        refreshPage();
    };

    return <div>
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
        <nav>
            <ul>
                <li><h1><ion-icon name="home"></ion-icon></h1></li>
                <li><NavItem title={"Ruling of Dwarfs"} link={"/"}></NavItem></li>
                {
                    (!currentUser) ? (
                    <></>
                    ) : (!admin) ? (
                        <li><a onClick={logout} href={"/login"}>Cerrar sesión</a></li>
                    ) : (
                    <>
                        <li><button className="select-admin" onClick={getUsuarios}>Usuarios</button></li>
                        <li><button className="select-admin" onClick={getPartidas}>Partidas</button></li>
                        <li><button className="select-admin" onClick={Backup}>Realizar backup de datos</button></li>
                        <li><a onClick={logout} href={"/login"}>Cerrar sesión</a></li>
                    </>
                    )
                }
            </ul>
        </nav>
        {
        (!admin) ? (
            <div className="texto-central-landing" >
                <h1>Usted no tiene acceso a esta pagina</h1>
            </div>
        ) : 
        (data.length === 0) ? (
            <div className="texto-central-landing" >
                <h1>Seleccione una tabla para manejar los datos</h1>
            </div>
        ) : (
            <div className="container-admin">
                <table>
                    <thead>
                        <tr>
                            {Object.keys(data[0]).map((key) => (
                                <th key={key}>{key}</th>
                            ))}
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((datos) => (
                            <tr key={datos.id}>{Object.keys(datos).map((key) => (
                                    <td key={key}>{datos[key]}</td>
                                ))
                                }
                                <td><button className="boton-admin" onClick={(e) => eliminar(e.target.id)} id={datos.id}>Eliminar</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table> 
            </div>
            )
        
    }
    </div>
}

export default Admin;