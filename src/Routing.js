import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from './components/Landing';
import Partidas from './components/Partidas';
import PartidasUser from './components/PartidasUser';
import Reglas from './components/Reglas';
import Config from './components/Config';
import Perfil from './components/Perfil';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Juego from './components/Juego';
import Admin from './components/Admin';
import CookieAuthProvider from './contexts/cookieAuth';
import TokenAuthProvider from './contexts/tokenAuth';

function Routing() {
    return (
        <BrowserRouter>
            <CookieAuthProvider>
                <TokenAuthProvider>
                    <Routes>
                        <Route path={"/"} element={<Landing/>}/>
                        <Route path={"/reglas"} element={<Reglas/>}/>
                        <Route path={"/aboutus"} element={<AboutUs/>}/>
                        <Route path={"/login"} element={<Login/>}/>
                        <Route path={"/config"} element={<Config/>}/>
                        <Route path={"/perfil"} element={<Perfil/>}/>
                        <Route path={"/juego/:id"} element={<Juego/>}/>
                        <Route path={"/partidas"} element={<Partidas/>}/>
                        <Route path={"/partidas/propias"} element={<PartidasUser/>}/>
                        <Route path={"/admin"} element={<Admin/>}/>
                    </Routes>
                </TokenAuthProvider>
            </CookieAuthProvider>
        </BrowserRouter>
    )
}

export default Routing;