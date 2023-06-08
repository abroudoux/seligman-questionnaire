// React
import { useState } from 'react';

// Interface
import qualitiesDataProps from '../interface/interface-qualities';

// Style
import './resultModel.scss';


export default function ResultDeleteModel(props: qualitiesDataProps) {

    const [ isClicked, setIsClicked ] = useState(false);

    const handleResultSelected = () => {
        if ( isClicked ) {
            setIsClicked(false);
        } else {
            setIsClicked(true);
        }
        props.onSelect(props.index);
    };

    return (

        <article className={`result-card ${isClicked ? 'result-card-clicked' : ''}`} onClick={ handleResultSelected } >

                <div className="result-card-top">
                    <h2>{props.quality}</h2>

                    <div className="result-card-icons">
                        {isClicked ? (
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                            </svg>
                        )}

                    </div>

                </div>

        </article>
    )
}
