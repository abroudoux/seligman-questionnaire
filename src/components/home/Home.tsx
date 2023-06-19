// React
import { Link } from "react-router-dom";

// Functions
import scrollToTop from "../../functions/scrollToTop";

// Styles
import './home.scss';


export default function Home() {

    const handleButton = () => {
        scrollToTop();
    };

    return (

        <main>
            <h1>Découvrez vos forces de caractères !</h1>
            <p>
                Les forces de caractère, aussi appelées « valeurs en action », sont des traits positifs qui permettent de déterminer un portrait psychologique d'un individu.
                <br/>
                <br/>
                Les psychologues Martin Séligman et Christopher Peterson ont identifié 24 forces, largement reconnues et valorisées. Ces forces peuvent être cultivées et pratiquées. D'où l'intérêt de les identifier.
                <br/>
                <br/>
            </p>
            <button onClick={() => handleButton()}>
                <Link to="/questions">Commencer</Link>
            </button>
        </main>
    )
}
