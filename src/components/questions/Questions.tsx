// React
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Data
import questionsA from './data/questions-a';
import questionsB from './data/questions-b';

// Model
import QuestionModel from './model/QuestionModel';

// Styles
import './questions.scss'


export default function Questions() {

    // var, useState & Arrays
    const [showQuestionsA, setShowQuestionsA] = useState(true);
    const [showButton, setShowButton] = useState(false);
    const responsesQuestionsA: { idQuestion: string, value: number} [] = [];
    const responsesQuestionsB: { idQuestion: string, value: number} [] = [];
    const btns = document.getElementsByName('button') as unknown as HTMLButtonElement;

    // Show following questions
    const handleButtonClickQuestions = () => {
        // if ( responsesQuestionsA.length == 24 ) {
            setShowQuestionsA(false);
        // }
    };

    // Previous questions
    const handleButtonBack = () => {
        if ( !showQuestionsA ) {
            setShowButton(true);
            setShowQuestionsA(true);
        }
    }

    // Scroll To Top
    const scrollToTop = () => {
        if ( responsesQuestionsA.length == 24 || responsesQuestionsB.length == 24 ) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    // Get and stock values
    const handleQuestionChange = ( idQuestion: string, value: number ) : void => {

        const data = {
            idQuestion: idQuestion as string,
            value: value as unknown as number,
        };

        if (/^\d+a$/.test(data.idQuestion)) {
            if (responsesQuestionsA.length > 0) {
                responsesQuestionsA.filter(d => d.idQuestion === idQuestion).map(d => d.value = data.value);
            }
            if (responsesQuestionsA.filter(d => d.idQuestion === idQuestion).length === 0) {
                responsesQuestionsA.push(data);
            };
            console.log(JSON.stringify(responsesQuestionsA));

        } else {
            if (responsesQuestionsB.length > 0) {
                responsesQuestionsB.filter(d => d.idQuestion === idQuestion).map(d => d.value = data.value);
            }
            if (responsesQuestionsB.filter(d => d.idQuestion === idQuestion).length === 0) {
                responsesQuestionsB.push(data);
            };
            console.log(JSON.stringify(responsesQuestionsB));
        };

    }

    return (

        <section>

            {showQuestionsA &&
                <div id="questions_title">
                    <h1>Test de personnalité : découvrez vos forces de caractères</h1>
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
            }

            {!showQuestionsA &&
                <a href="" onClick={() => { handleButtonBack() }}>
                    Retour
                </a>

            }

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
                    Suivant
                </button>
            }

            {!showQuestionsA &&
                <button onClick={() => { scrollToTop() }}>
                    <Link to="/results">
                       Envoyer
                    </Link>
                </button>
            }

        </section>
    )

}
