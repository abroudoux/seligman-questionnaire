// React
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Styles
import './header.scss';

// Logos & Icons
import logo from '../../assets/logo_krakn.png';


export default function Header() {

    // useState
    const [ showMenu, setShowMenu ] = useState(false);

    // Show menu
    const handleShowMenu = () => {
        setShowMenu((prevState) => !prevState);
    };

    return (

        <header>
            <div id="header_title">
                <Link to="/">
                    <img src={ logo } alt="Logo Krakn" />
                </Link>
            </div>

            <div id="header_menu" onClick={ handleShowMenu }>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" >
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                </svg>
            </div>

            {showMenu && 
                <nav>
                    <ul>
                        <li>
                            <Link to="/home" onClick={ handleShowMenu }>| Accueil</Link>
                        </li>
                        <li>
                            <Link to="/questions" onClick={ handleShowMenu }>| Faire le test</Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={ handleShowMenu }>| Contact</Link>
                        </li>
                    </ul>
                </nav>
            }

            {showMenu && 
                <div className="overlay" onClick={ handleShowMenu }></div>
            }
        </header>
    )
}
