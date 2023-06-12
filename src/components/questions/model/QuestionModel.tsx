// Interface
import questionsDataProps from '../interface/interface-questions';

// Styles
import './questionModel.scss';


export default function QuestionModel(props: questionsDataProps) {

    const idQuestion = props.id.toString() + props.type.toString() as string;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const data = {
            idQuestion: idQuestion as string,
            value: value as unknown as number,
        };
        props.onChange(data.idQuestion, data.value);
    };

    return (

        <article className="question">
            <fieldset>
                <legend>
                    {props.id}. {props.question}
                </legend>
                <div className="inputs">
                    <input type="radio" name={ idQuestion } aria-label="Pas du tout d'accord" className="lg red" value={ props.calcul[0] } onChange={ handleInputChange } />
                    <input type="radio" name={ idQuestion } aria-label="Pas d'accord" className="md red" value={ props.calcul[1] } onChange={ handleInputChange } />
                    <input type="radio" name={ idQuestion } aria-label="Neutre" className="sm grey" value={ props.calcul[2] } onChange={ handleInputChange } />
                    <input type="radio" name={ idQuestion } aria-label="Plutôt d'accord" className="md green" value={ props.calcul[3] } onChange={ handleInputChange } />
                    <input type="radio" name={ idQuestion } aria-label="Absolument d'accord" className="lg green" value={ props.calcul[4] } onChange={ handleInputChange } />
                </div>
            </fieldset>

            <div className="question-content">
                <p>Pas du tout d'accord</p>
                <p>Tout à fait d'accord</p>
            </div>
        </article>

    )
}

