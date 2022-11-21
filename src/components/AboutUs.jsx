import NavBar from './miscelaneos/NavBar';
import '../assets/styles/texto.css';

function AboutUs() {
    return <div>
        <NavBar/>
        <div className="fondo-texto">
            <div className="titulo-pagina">
                <h1>Equipo Dwarfs</h1>
            </div>
            <div className="texto-central-parrafo">
                <p>
                    Somos el grupo Webeam y sabemos que una de las formas más divertidas de compartir con la familia y los amigos son los juegos de mesa. Por ello, y puesto que desde la pandemia volvimos a reencontrarnos con todos esos seres queridos que viven más allá de lo manejable, para una tarde de juegos, es que decidimos crear un juego en formato online.
                </p>
                <p>
                    Este sigue la misma estructura de los juegos tradicionales, sumado a algunos detalles que lo hacen más fácil. Cómo evitar la preparación de los elementos, o tener que ordenarlos tras acabar. Que nosotros sabemos siempre genera discusiones, por lo que el que siempre pierde no le va a tocar ordenar esta vez. 
                </p>
                <p>
                    Los integrantes que hiciero posible poder disfrutar este juego son:
                </p> 
                <p> Antonia Blanco: Partió la universidad pensando en dedicarse al área química, pero tras el curso introductorio de computación se decidió por el major de software. Cuando hay tiempo le gusta realizar deporte, tocar el piano y ver series.</p>
                <p> Lucas Fernández: Perteneciente al major de software, tiene experiencia en otros proyectos tanto dentro como fuera de la universidad. En su tiempo libre le gusta cocinar, jugar tretis, subir cerros y realizar otros deportes.</p>
                <p> Tomás Fouyet: Siempre muy apasionado con todo el tema de programación y aprender como funciona el mundo de la computacion. Un real apasionado de los videojuegos (jugando desde los 12, empezando con el Minecraft). Actualmente se encuentra en el major de Ingeneria de Software, y le gustaria seguir aprendiendo mucho mas acerca de este mundo tan amplio de la computación</p>
                
            </div>
        </div>
    </div>
}

export default AboutUs;