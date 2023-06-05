// React
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Data
import questionsA from './data/questions-a';
import questionsB from './data/questions-b';

// Model
import QuestionModel from './model/QuestionModel';

// Styles
import './questions.scss';


export default function Questions() {

    // useState
    const [ showQuestionsA, setShowQuestionsA ] = useState(true);
    const [ responsesQuestionsA, setResponsesQuestionsA ] = useState<{ idQuestion: string, value: number }[]>([]);
    const [ responsesQuestionsB, setResponsesQuestionsB ] = useState<{ idQuestion: string, value: number }[]>([]);

    // Show following questions
    const handleButtonClickQuestions = () => {
        if ( responsesQuestionsA.length == questionsA.length ) {
            setShowQuestionsA(false);
        };
    };

    // Scroll To Top
    const scrollToTop = () => {
        if ( responsesQuestionsA.length == questionsA.length || responsesQuestionsB.length == questionsB.length ) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        };
    };

    // Get and stock Value
    useEffect(() => {}, [ responsesQuestionsA, responsesQuestionsB ] );

    const handleQuestionsChange = ( idQuestion: string, value: number ) : void => {
        const data = {
            idQuestion: idQuestion as string,
            value: value as unknown as number,
        };

        if (/^\d+a$/.test(data.idQuestion)) {
            if (responsesQuestionsA.length > 0) {
                setResponsesQuestionsA(prevState => prevState.filter(d => d.idQuestion !== idQuestion).concat({ ...data }));
            } else {
                setResponsesQuestionsA([{ ...data }]);
            };
        } else {
            if (responsesQuestionsB.length > 0) {
                setResponsesQuestionsB(prevState => prevState.filter(d => d.idQuestion !== idQuestion).concat({ ...data }));
            } else {
                setResponsesQuestionsB([{ ...data }]);
            };
        };
    };

    // Send to SessionStorage
    const dataSessionStorage = () => {
        const tableA = JSON.stringify(responsesQuestionsA);
        const tableB = JSON.stringify(responsesQuestionsB);

        sessionStorage.setItem( 'responsesQuestionsA', tableA );
        sessionStorage.setItem( 'responsesQuestionsB', tableB );
    };

    return (

        <section>

            {showQuestionsA &&
                <div id="questions_title">
                    <h1>Test de personnalité : découvrez vos forces de caractères</h1>
                    <ul>
                        <li>⏰ Durée : moins de 10 minutes</li>
                        <li>😇 Soyez le plus honnête, même lorsque la réponse ne vous convient pas !</li>
                        <li>🚫 Évitez les réponses neutres !</li>
                    </ul>
                </div>
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
                        onChange={handleQuestionsChange}
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
                        onChange={handleQuestionsChange}
                    />
                ))
            }

            {showQuestionsA &&
                <>
                    <button onClick={() => { handleButtonClickQuestions(), scrollToTop() }}>
                        Suivant
                    </button>
                    {responsesQuestionsA.length !== questionsA.length && (
                        <p className="msg-infos">Veuillez compléter tous les champs</p>
                    )}
                </>
            }

            {!showQuestionsA &&
                <>
                    <Link to="/success">
                        <button onClick={() => { scrollToTop(), dataSessionStorage() }}>
                            Envoyer
                        </button>
                    </Link>
                    {responsesQuestionsB.length !== questionsB.length && (
                        <p className="msg-infos">Veuillez compléter tous les champs</p>
                    )}
                </>
            }

        </section>
    )

}
