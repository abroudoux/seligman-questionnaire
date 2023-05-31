// React
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Data
import questionsA from './data/questions-a';
import questionsB from './data/questions-b';

// Models
import QuestionModel from './model/QuestionModel';

// Styles
import './questions.scss'


export default function Questions() {

    // States
    const [showQuestionsA, setShowQuestionsA] = useState(true);

    // Show following questions
    const handleButtonClickQuestions = () => {
        setShowQuestionsA(false);
    };

    // Scroll To Top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // const questionsAArray: QuestionModel[];
    // const questionsBArray: QuestionModel[];

    const handleQuestionChange = (value: number) : void => {
        console.log("Dans handleQuestionChange avec " + value);
    }

    return (

        <section>

            <div id="questions_title">
                <h1>
                    Test de personnalité : découvrez vos forces de caractères
                </h1>

                <ul>
                    <li>
                        Durée : moins de 10 minutes
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
                    <QuestionModel
                        key={questionsA.id}
                        id={questionsA.id}
                        question={questionsA.question}
                        number={questionsA.number}
                        type={questionsA.type}
                        calcul={questionsA.calcul}
                        onChange={handleQuestionChange}
                    />
                ))
            }

            {!showQuestionsA &&
                questionsB.map((questionsB) => (
                    <QuestionModel
                        key={questionsB.id}
                        id={questionsB.id}
                        question={questionsB.question}
                        number={questionsB.number}
                        type={questionsB.type}
                        calcul={questionsB.calcul}
                        onChange={handleQuestionChange}
                    />
                ))
            }

            {showQuestionsA &&
                <button onClick={() => { handleButtonClickQuestions(); scrollToTop() }}>
                    Suite des questions
                </button>
            }

            {!showQuestionsA &&
                <button onClick={() => { scrollToTop() }}>
                    <Link to="/results">
                        Voir mes résultats
                    </Link>
                </button>
            }

        </section>
    )

}
