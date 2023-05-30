// React
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Data
import questionsA from './data/questions-a';
import questionsB from './data/questions-b';

// Model
import Question from './model/Question';

// Styles
import './questions.scss'


export default function Questions() {

    const [showQuestionsA, setShowQuestionsA] = useState(true);
    const [showResults, setShowResults] = useState(false);

    // Show following questions
    const handleButtonClickQuestions = () => {
        setShowQuestionsA(false);
    };

    // Show results
    const handleButtonClickResults = () => {
        setShowResults(false);
    }

    // Scroll To Top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    return (
        <section>

            <div id="questions_title">
                <h1>
                    Test de personnalité : découvrez vos forces de caractères
                </h1>

                <ul>
                    <li>
                        Ce test dure moins de 10 minutes
                    </li>
                    <li>
                        Soyez le plus honnête, même lorsque la réponse ne vous convient pas !
                    </li>
                    <li>
                        Évitez les réponses neutres !
                    </li>
                </ul>
            </div>

            {showQuestionsA &&
                questionsA.map((questionsA) => (
                    <Question
                        key={questionsA.id}
                        id={questionsA.id}
                        question={questionsA.question}
                        number={questionsA.number}
                        type={questionsA.type}
                    />
                ))
            }

            {!showQuestionsA &&
                questionsB.map((questionsB) => (
                    <Question
                        key={questionsB.id}
                        id={questionsB.id}
                        question={questionsB.question}
                        number={questionsB.number}
                        type={questionsB.type}
                    />
                ))
            }

            {showQuestionsA &&
                <button onClick={event => { handleButtonClickQuestions(); scrollToTop() }}>
                    Suite des questions
                </button>
            }

            {!showQuestionsA &&
                <button onClick={event => { handleButtonClickResults(); scrollToTop() }}>
                    <Link to="results">
                        Voir mes résultats
                    </Link>
                </button>
            }

        </section>
    )

}