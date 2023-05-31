// Interface
import questionsDataProps from '../interface/interface-questions';

// Styles
import './questionModel.scss';


export default function QuestionModelA(props: questionsDataProps) {

    // const [selectedValue, setSelectedValue] = useState('');
    // console.log(selectedValue);


    return (

        <div className="question">
            <fieldset>
                <legend>
                    {props.id}. {props.question}
                </legend>
                <input type="radio" name="option" className="lg green" value="5" />
                <input type="radio" name="option" className="md green" value="4" />
                <input type="radio" name="option" className="sm grey" value="3" />
                <input type="radio" name="option" className="md red" value="2" />
                <input type="radio" name="option" className="lg red" value="1" />
                {/* <input type="radio" name="option" className="lg green" value="1" onChange={(e) => setSelectedValue(e.target.value)}/>
                <input type="radio" name="option" className="md green" value="2" onChange={(e) => setSelectedValue(e.target.value)}/>
                <input type="radio" name="option" className="sm grey" value="3" onChange={(e) => setSelectedValue(e.target.value)}/>
                <input type="radio" name="option" className="md red" value="4" onChange={(e) => setSelectedValue(e.target.value)}/>
                <input type="radio" name="option" className="lg red" value="5" onChange={(e) => setSelectedValue(e.target.value)}/> */}
            </fieldset>
            <div id="question_content">
                <p>Tout à fait d'accord</p>
                <p>Pas du tout d'accord</p>
            </div>
        </div>

    )
}