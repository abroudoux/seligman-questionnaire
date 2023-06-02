// React
import { Link } from 'react-router-dom';

// Style
import './successPage.scss';
import '../../styles/_global.scss';


export default function SuccessPage() {

    return (
        <section>
            <h1>Merci d'avoir fait ce test !</h1>

            <p>Vos résultats sont désormais disponibles, cliquez sur le boutton pour les découvrir</p>

            <button>
                <Link to="results">
                    Résultats
                </Link>
            </button>
        </section>
    )
}
