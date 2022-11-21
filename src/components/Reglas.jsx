import NavBar from './miscelaneos/NavBar';
import '../assets/styles/texto.css';

function Reglas() {
    return <div>
        <NavBar/>
        <div className="fondo-texto">
            <div className="titulo-pagina">
                <h1>Rules of Dwarfs</h1>
            </div>
            <div className="texto-central-parrafo">
                <p>
                    Este es un increible juego para pasar un buen rato con amigos y familia que no necesariamente se encuentran cercanos para poder realizarlo de forma precencial. Esta es la versión 1.2 del juego, lanzada al mundo el 23 de 09 del 2022.
                </p>

                <p>
                    Aquí presentamos las reglas más importantes para poder sacar el máximo provecho del juego.
                </p>

                <p>
                    Ruling of dwarfs (2 a 4 jugadores) requiere el uso de tus habilidades en estrategía, negociación y razonamiento para lograr obtener distintos recursos, construir edificaciones y conquistar las minas de los otros jugadores, logrando de esta forma ser el primero en obtener los 12 puntos, adquiririendo el anhelado título “King of durin's folk.”
                </p>
                <p>
                    Antes de comenzar:
                    Si es que eres quién crea la partida es necesario que escojas para cuantos jugadores sera, cuanto durará cada turno y con cuantos puntos se gana la partida. Después los otros jugadores podrán unirse a través de la página de partidas.
                </p>
                <p>
                    Cada jugador escoge una nación diferente la cual será representada en el mapa por un distinto color.
                    Es necesario que todos los jugadores tiren un dado para obtener el orden en el que se jugará, desde el número más alto al menor. Y en caso de empate, los jugadores empatados deben volver a lanzar el dado para tener una resolución.
                    Cada jugador ubica un pozo y un riel en el mapa en el orden en que jugarán, cumpliendo la regla de dos rieles de distancia entre ellos.
                    Esta vez en sentido contrario cada jugador ubica una mina y un riel en el mapa, obteniendo por ello un solo recurso del lugar donde se ubicó.
                </p>
                <p >
                    En el juego:
                    Al principio de cada turno se deben tirar los 3 dados, repartiendo con ello los recursos, y cartas de desarrollo que se activen.
                    Se debe verificar si es que la suma de los dados normales da 7, lo que activa una seguidilla de acciones partiendo por verificar que ningún jugador posea más de 7 cartas, mover a los saqueadores y defender a las minas si es que es necesario.
                    Posteriormente se pueden realizar las compras de construcciones, enanos y cartas y el intercambio de recursos. 
                    Se tienen distintas acciones a seguir, como el mejoramiento de edificaciones, el ataque a otras construcciones, mejoramiento y activamiento de los enanos.
                    Cuando el jugador decide no seguir realizando más acciones, o se le acabaron los recursos para realizarlos se procede al siguiente jugador.
                </p>
                <p>
                    Fin del juego:
                    El jugador que primero logre juntar 12 puntos a través de sus construcciones, conquistas y cartas de desarrollo. Será declarado  “King of durin’s folk”.
                </p>
            </div>
        </div>
    </div>
}

export default Reglas;