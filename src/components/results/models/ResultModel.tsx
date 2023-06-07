// React
import { useState } from 'react';

// Interface
import qualitiesDataProps from '../interface/interface-qualities';

// Style
import './resultModel.scss';


export default function ResultModel(props: qualitiesDataProps) {

    // useState
    const [ isDescriptionVisible, setIsDescriptionVisible ] = useState(false);

    // Hide descriptions
    const handleHideDescription = () => {
        if ( !isDescriptionVisible ) {
            setIsDescriptionVisible(true);
        } else {
            setIsDescriptionVisible(false);
        }
    }

    return (

        <article className="result-card" onClick={ () => { handleHideDescription() } }>

                <div className="result-card-top">
                    <h2>{props.quality}</h2>

                    <div className="result-card-icons">
                        {!isDescriptionVisible &&
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
                            </svg>
                        }
                        {isDescriptionVisible &&
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/>
                            </svg>
                        }
                    </div>
                </div>

                <div className="result-card-bottom">
                    {isDescriptionVisible &&
                        <p>{props.description}</p>
                    }
                </div>

        </article>
    )
}
