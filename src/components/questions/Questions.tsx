// Data
import questionsA from './data/questions-a';
import questionsB from './data/questions-b';

// Components
import Question from './model/Question';

// Styles
import './questions.scss'


export default function Questions() {

    return (
        <section>

            {/* {questionsA.map(questionsA => (
                    <Question
                        id={questionsA.id}
                        name={questionsA.question}
                    />
            ))}

            {questionsB.map(questionsB => (
                    <Question
                        id={questionsB.id}
                        name={questionsB.question}
                    />
            ))} */}

        </section>
    )

}