// React
import { useState } from 'react';

// Interface
import qualitiesDataProps from '../interface/interface-qualities';

// Style
import './resultModel.scss';


export default function ResultModel(props: qualitiesDataProps) {

    // useState
    const [ showDeleteResult, setShowDeleteResult] = useState(false);

    // Delete results
    const handleDeleteResult = () => {
        setShowDeleteResult(true);
    }

    return (
        <article>
            {!showDeleteResult &&
                <div>
                    <h1>Oops, il semble difficile de vous choisir seulement 5 qualités</h1>
                    <p>Choisissez les 5 qui vous correspondent le plus</p>
                </div>
            }

            {showDeleteResult &&
                <h1>Vos résultats</h1>
            }

            <div id="result_card" onClick={ () => { handleDeleteResult() } }>
                <h2>{props.quality}</h2>

                {!showDeleteResult &&
                    <div id="result_card_cross">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                        </svg>
                    </div>
                }
            </div>
        </article>
    )
}
