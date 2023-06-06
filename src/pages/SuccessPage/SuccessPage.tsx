// React
import { Link } from 'react-router-dom';

// Style
import './successPage.scss';
import '../../styles/_global.scss';


export default function SuccessPage() {

    const refresh = () => {
        window.location.reload();
        window.location.href = '/results';
    }

    return (
        <section id="success_page">
            <div className="success-animation">
                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                    <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
            </div>
            <h1>Merci d'avoir fait ce test !</h1>

            <p>Vos résultats sont désormais disponibles, cliquez sur le boutton pour les découvrir</p>

            <Link to="/results" onClick={refresh}>
                <button>Résultats</button>
            </Link>
        </section>
    )
}
