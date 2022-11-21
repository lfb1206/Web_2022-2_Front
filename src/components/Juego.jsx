import Tiempo from './juego/Tiempo';
import '../assets/styles/juego.css';
import Jugador from './juego/Jugador';
import Saqueadores from './juego/Saqueadores';
import Materiales from './juego/Materiales';
import Tablero from './juego/Tablero';
import Dados from './juego/Dados';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";
import { SERVER_URL } from '../App';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

function Juego() {
    const matchId = useParams().id;
    const allowed = true;
    const list_jugadores = [];
    const [utilizable, setUtilizable] = useState(false);

    const [grid, setGrid] = useState(null);
    const [lanzar, setLanzar] = useState(true);
    const [open, setOpen] = useState(false);
    const [texto, setTexto] = useState("");

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const url = `${SERVER_URL}/juego/${matchId}`;
        axios.get(url).then((response) => {
        setGrid(response.data);
        }).catch(err => {
            setOpen(true);
            setTexto(err.response.data.detail);
        });
    }, []);

    const getGrid = async () => {
        const url = `${SERVER_URL}/juego/${matchId}`;
        axios.get(url).then((response) => {
            setGrid(response.data);
            setUtilizable(response.data.currentplayer)
            if (!(response.data.ganador.jugador_ganador === 'false')) {
                setUtilizable(false)
                setTexto(`Ha ganado ${grid.ganador.jugador_ganador}`)
                setOpen(true);
            };
        }).catch(err => {
            setOpen(true);
            setTexto(err.response.data.detail);
        });
    };

    const endTurn = async () => {
        const url = `${SERVER_URL}/juego/${matchId}/endTurn`;
        await axios
            .get(url)
            .then((response) => {
                console.log(response);
            }).catch(err => {
                setOpen(true);
                setTexto(err.response.data.detail);
            });
        setLanzar(true);
        getGrid();
    };

    const rollDice = async () => {

        let elDiceOne  = document.getElementById('dice1');
        let elDiceTwo  = document.getElementById('dice2');
        let elDiceThree = document.getElementById('dice3');
        let diceOne = Math.floor((Math.random() * 6) + 1);
        let diceTwo = Math.floor((Math.random() * 6) + 1);
        let diceThree = Math.floor((Math.random() * 6) + 1);
        const conv = {
            1: 1,
            6: 2,
            4: 3,
            5: 4,
            2: 5,
            3: 6,
        }
        let sum = 0
        let especial = false;

        for (let i = 1; i <= 6; i++) {
            elDiceOne.classList.remove('show-' + i);
            if (diceOne === i) {
                elDiceOne.classList.add('show-' + i);
                sum += conv[i];
            }
        };
        
        for (let k = 1; k <= 6; k++) {
            elDiceTwo.classList.remove('show-' + k);
            if (diceTwo === k) {
                elDiceTwo.classList.add('show-' + k);
                sum += conv[k];
            }
        };
        
        for (let j = 1; j <= 6; j++) {
            elDiceThree.classList.remove('show-' + j);
            if (diceThree === j) {
                elDiceThree.classList.add('show-' + j);
                if (conv[j] % 2 !== 0) {
                    especial = true;
                };
            }
        };
        const url = `${SERVER_URL}/juego/${matchId}/play`;
        const body = {
            dados: sum,
            evento: especial
        };
        await axios
            .post(url, body)
            .then(getGrid).catch(err => {
                setOpen(true);
                setTexto(err.response.data.detail);
            });
        setLanzar(false);
    };

    if (grid === null) {
        return <>Still loading...</>;
    } else {
        Object.keys(grid.jugadores).map((llave, index) => {
            list_jugadores.push([index, grid.jugadores[llave]]);
        });
    }

    return <div className="juego">
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
            <Tiempo tiempo_turno = {grid.currentplayer} ></Tiempo>
            {(grid.ganador.jugador_ganador ==='false') && grid.Iniciada && <Dados></Dados>}
            {list_jugadores.map((jug) => (
                <Jugador key={jug[0]} class = {"jug" + jug[0]} info_jug = {jug[1]}></Jugador>
            ))}
            <Tablero info_tablero={grid.tablero} grilla = {getGrid} accion_lanzar = {rollDice} jugada = {endTurn} utilizable = {utilizable} iniciada={grid.Iniciada} turno={lanzar} ganador={grid.ganador.jugador_ganador}></Tablero>
            <Materiales info_materiales = {grid.materiales} ></Materiales>
            <Saqueadores info_saqueadores = {grid.saqueadores} ></Saqueadores>
        </div>
}

export default Juego;