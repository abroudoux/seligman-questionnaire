// React
import { Link } from "react-router-dom";

// Styles
import './home.scss';


export default function Home() {

    return (
        <main>
            <h1>
                Grace à ce test, découvrez vos forces de caractères!
            </h1>
            <p>
                Les forces de caractère, aussi appelées « valeurs en action », sont différentes d'autres types de forces tels que les compétences, les talents, les intérêts ou les ressources. Elles sont des traits positifs qui aident à mener une vie heureuse et florissante.
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