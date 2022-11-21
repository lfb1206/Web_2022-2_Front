import NavItem from "./NavItem";
import axios from "axios";
import useCookieAuth from '../../hooks/useCookieAuth';
import useTokenAuth from "../../hooks/useTokenAuth";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from '../../App';
import '../../assets/styles/base.css';

function NavBar() {
    const { currentUser, handleUserLogout } = useCookieAuth(); 
    const navigate = useNavigate();
    const { handleTokenChange } = useTokenAuth();

    const logout = async () => {
        await axios.post(`${SERVER_URL}/auth/logout`).catch(err => console.log(err)).catch(err => {
            alert(err.response.data);
        });
        handleUserLogout();
        navigate("/login");
        handleTokenChange('', 'logout');
    }
    
    return <nav>
                <ul>
                    <li><h1><ion-icon name="home"></ion-icon></h1></li>
                    {
                        (!currentUser) ? (
                        <>
                            <li><NavItem title={"Ruling of Dwarfs"} link={"/"}></NavItem></li>
                            <li><NavItem title={"Reglas"} link={"/reglas"}></NavItem></li>
                        </>
                        ) : (
                        <>
                            <li><NavItem title={"Ruling of Dwarfs"} link={"/"}></NavItem></li>
                            <li><NavItem title={"Partidas"} link={"/partidas"}></NavItem></li>
                            <li><NavItem title={"Reglas"} link={"/reglas"}></NavItem></li> 
                            <li><NavItem title={"Nueva Partida"} link={"/config"}></NavItem></li>
                        </>
                        )
                    }
                    <li className="dropdown">
                        <NavItem className="dropbtn" title={"Menu"} link={"/"}></NavItem>
                        <div className="dropdown-content">
                        {
                            (!currentUser) ? (
                            <>
                                <NavItem title={"Sobre nosotros"} link={"/aboutus"}></NavItem>
                                <NavItem title={"Iniciar Sesión"} link={"/login"}></NavItem>
                            </>
                            ) : (
                            <>
                                <NavItem title={"Perfil"} link={"/perfil"}></NavItem>
                                <NavItem title={"Sobre nosotros"} link={"/aboutus"}></NavItem>
                                <a onClick={logout} href={"/login"}>Cerrar sesión</a>
                            </>
                            )
                        }
                        </div>
                    </li>
                </ul>
            </nav>
}



export default NavBar;