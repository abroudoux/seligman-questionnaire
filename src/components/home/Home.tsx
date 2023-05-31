// React
import { Link } from "react-router-dom";

// Styles
import './home.scss';


export default function Home() {

    return (
        <main>
            <button>
                <Link to="/questions">Faire le quizz</Link>
            </button>
        </main>
    )
}