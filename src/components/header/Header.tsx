// Styles
import { Link } from 'react-router-dom';
import './header.scss';


export default function Header() {
    return(
        <header>
            <div id="header_title">
                <Link to="/home">Quizz</Link>
            </div>

            <nav>
                Icon
            </nav>
        </header>
    )
}