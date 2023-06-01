// React
import { Link } from 'react-router-dom';

// Styles
import './header.scss';

// Logo
import logo from '../../../public/assets/logo_krakn.png';


export default function Header() {
    return(
        <header>
            <div id="header_title">
                <Link to="/home">
                    <img src={ logo } alt="Logo Krakn" />
                </Link>
            </div>

            <nav>
                Icon
            </nav>
        </header>
    )
}