import {useState} from 'react';
import NavBar from './miscelaneos/NavBar';
import '../assets/styles/landing.css';

function Landing() {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return <div>
        <NavBar/>
        <div className="texto-central-landing" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            {!isHovering && <h1>Who's gonna be the<br/>King of durin's folk</h1>}
            {isHovering && <h1>You must be the one <br/> who conquers all</h1>}
        </div>
    </div>
}

export default Landing;