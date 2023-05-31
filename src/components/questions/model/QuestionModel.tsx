// Interface
import { useState } from 'react';
import questionsDataProps from '../interface/interface-questions';

// Styles
import './questionModel.scss';


export default function QuestionModel(props: questionsDataProps) {

    const idQuestion = props.id.toString() + props.type.toString() as string;
    const responsesQuestionsA: { idQuestion: string, value: number} [] = [];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const data = {
            idQuestion: idQuestion as string,
            value: value as unknown as number,
        };

        for (let i = 0; i < responsesQuestionsA.length; i++) {
            if (responsesQuestionsA[i].idQuestion === data.idQuestion) {
                responsesQuestionsA[i].value = data.value;
            } else {
                responsesQuestionsA.push(data);
            }
        };

        console.log(responsesQuestionsA);
    };

    return (

        <div className="question">
            <fieldset>
                <legend>
                    {props.id}. {props.question}
                </legend>
                <input type="radio" name={idQuestion} className="lg green" value={props.calcul[0]} onChange={handleInputChange} />
                <input type="radio" name={idQuestion} className="md green" value={props.calcul[1]} onChange={handleInputChange} />
                <input type="radio" name={idQuestion} className="sm grey" value={props.calcul[2]} onChange={handleInputChange} />
                <input type="radio" name={idQuestion} className="md red" value={props.calcul[3]} onChange={handleInputChange} />
                <input type="radio" name={idQuestion} className="lg red" value={props.calcul[4]} onChange={handleInputChange} />
            </fieldset>
            <div id="question_content">
                <p>Tout à fait d'accord</p>
                <p>Pas du tout d'accord</p>
            </div>
        </div>

    )
}