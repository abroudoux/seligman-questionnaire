// React
import { Link } from "react-router-dom";

// Styles
import './home.scss';


export default function Home() {

    return (
        <main>
            <h1>
                Grace à ce test, découvrez vos forces de caractères !
            </h1>
            <p>
                Les forces de caractère, aussi appelées « valeurs en action », sont des traits positifs qui permettent de déterminer un portrait psychologique d'un individu.
                <br/>
                <br/>
                Les psychologues Martin Séligman et Christopher Peterson ont identifié 24 forces, largement reconnues et valorisées. Ces forces peuvent être cultivées et pratiquées. D'où l'intérêt de les identifier.
                <br/>
                <br/>
                Les cinq forces principales d'une personne, qui constituent un profil unique, sont appelées « forces signatures ».
            </p>
            <button>
                <Link to="/questions">Faire le test</Link>
            </button>
        </main>
    )
}
