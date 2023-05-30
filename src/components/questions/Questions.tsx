// React
import { useState } from 'react';

// Data
import questionsA from './data/questions-a';
import questionsB from './data/questions-b';

// Components
import Question from './model/Question';

// Styles
import './questions.scss'


export default function Questions() {

    const [showQuestionsA, setShowQuestionsA] = useState(true);

    const handleButtonClick = () => {
        setShowQuestionsA(false);
    };

    return (
        <section>

            {showQuestionsA &&
                questionsA.map((questionsA) => (
                    <Question
                        key={questionsA.id}
                        id={questionsA.id}
                        question={questionsA.question}
                        number={questionsA.number}
                        type={questionsA.type}
                    />
                    ))}

            {!showQuestionsA &&
                questionsB.map((questionsB) => (
                    <Question
                        key={questionsB.id}
                        id={questionsB.id}
                        question={questionsB.question}
                        number={questionsB.number}
                        type={questionsB.type}
                    />
                ))}

            <button onClick={handleButtonClick}>
                Afficher les questions B
            </button>

        </section>
    )

}