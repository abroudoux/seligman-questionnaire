// React
import { Link } from "react-router-dom";

// Styles
import './home.scss';


export default function Home() {

    return (
        <main>
            <h1>hello world</h1>

            <button>
                <Link to="/questions">Faire le quizz</Link>
            </button>
        </main>
    )
}