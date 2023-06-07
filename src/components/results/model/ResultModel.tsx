// React
import { useState } from 'react';

// Interface
import qualitiesDataProps from '../interface/interface-qualities';

// Style
import './resultModel.scss';


export default function ResultModel(props: qualitiesDataProps) {

    // useState
    const [ showDeleteResult, setShowDeleteResult] = useState(false);
    const [ showDescription, setShowDescription ] = useState(false);
    const [ isDescriptionVisible, setIsDescriptionVisible ] = useState(false);

    // Delete results
    const handleDeleteResult = () => {
        setShowDeleteResult(false);
    }

    // Hide descriptions
    const handleHideDescription = () => {
        if ( showDescription ) {
            setShowDescription(false);
            setIsDescriptionVisible(false);
        } else {
            setShowDescription(true);
            setIsDescriptionVisible(true);
        }
    }

    return (

        <article>
            <div className="result_card" onClick={ () => { handleDeleteResult(); handleHideDescription() } }>

                <div className="result_card_top">
                    <h2>{props.quality}</h2>

                    <div className="result_card_icons">
                        {showDeleteResult &&
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        }
                        {!showDeleteResult && !isDescriptionVisible &&
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
                            </svg>
                        }
                        {!showDeleteResult && isDescriptionVisible &&
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/>
                            </svg>
                        }
                    </div>

                </div>

                <div className="result_card_bottom">

                    {showDescription && !showDeleteResult &&
                        <p>{props.description}</p>
                    }

                </div>
            </div>
        </article>
    )
}
