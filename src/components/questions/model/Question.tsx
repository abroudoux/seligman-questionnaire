// Interface
import questionsDataProps from '../interface/interface-questions';

// Styles
import './question.scss';


export default function Question() {

    return (
        <div className="question">
            <fieldset>
                <legend>
                    Le monde m'inspire toujours de la curiosité
                </legend>
                <input type="radio" name="option" className="lg green" value="1"/>
                <input type="radio" name="option" className="md green" value="2"/>
                <input type="radio" name="option" className="sm grey" value="3"/>
                <input type="radio" name="option" className="md red" value="4"/>
                <input type="radio" name="option" className="lg red" value="5"/>
            </fieldset>
            <div id="question_content">
                <p>Tout à fait d'accord</p>
                <p>Pas du tout d'accord</p>
            </div>
        </div>
    )
}