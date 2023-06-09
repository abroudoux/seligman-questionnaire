// React
import { useState } from 'react';

// Data
import tableResults from './data/tableResults';

// Interface
import qualitiesDataProps from './interface/interface-qualities';

// Models
import ResultModel from './models/ResultModel';
import ResultDeleteModel from './models/ResultDeleteModel';

// Style
import './results.scss';


export default function Results() {

    // useState & var
    const [ showResults, setShowResults ] = useState(false);
    let nbChooseItems: number = tableResults.length - 5;
    let newEndTableResults: qualitiesDataProps[] = [];


    // Create & Slice tables
    const newValue = tableResults[tableResults.length - 1].value;
    let lastIndex = -1;

    for ( let i = tableResults.length - 1; i >= 0; i-- ) {
        if ( tableResults[i].value !== newValue ) {
            lastIndex = i + 1;
            break;
        };
    };


    // deleteResults
    const handleSelectResult = (result: qualitiesDataProps) => {

        while ( newEndTableResults.length !== nbChooseItems ) {
            const isResultPresent = newEndTableResults.some(item => item.id === result.id);

            if ( isResultPresent ) {
                newEndTableResults = newEndTableResults.filter(item => item.id !== result.id);
            } else if ( newEndTableResults.length === nbChooseItems ) {
                newEndTableResults.shift();
            } else {
                newEndTableResults.push(result);
            }
        }

        console.log(newTableResults);

    };


    // Confirm deleteResults 
    const handleDeleteConfirm = () => {
        if ( newEndTableResults.length === nbChooseItems ) {
            setShowResults(true);
        } else {
            setShowResults(false);
        }
    };

    const startTableResults = tableResults.slice(0, lastIndex);
    const endTableResults = tableResults.slice(lastIndex);
    const newTableResults = startTableResults.concat(newEndTableResults);

    console.log(startTableResults, endTableResults, newTableResults);

    return (

        <section id="results">

            {showResults ? (
            // {showResults && (newTableResults.length === 5 || tableResults.length === 5) ? (

                <div className="results-section">
                    <h1>Vos 5 forces de caractères :</h1>
                    {/* {newTableResults.map((newTableResults, index) => (
                        <ResultModel
                            key={newTableResults.id}
                            id={newTableResults.id}
                            quality={newTableResults.quality}
                            value={newTableResults.value}
                            description={''}
                            onClick={() => handleSelectResult(index)}
                        />
                    ))} */}
                </div>

            ) : (

                <div className="results-section">
                    <h1>😕 Oups, il semble difficile de vous choisir 5 qualités, vous nous aidez à faire un choix ?</h1>
                    {nbChooseItems > 1 &&
                        <p>Choissisez les {nbChooseItems} qualités qui vous correspondent le plus puis validez vore réponse</p>
                    }
                    {nbChooseItems === 1 &&
                        <p>Choisissez la qualité qui vous correspond le moins puis validez vore réponse</p>
                    }
                    {endTableResults.map((result) => (
                        <ResultDeleteModel
                            key={result.id}
                            id={result.id}
                            quality={result.quality}
                            value={result.value}
                            description={''}
                            onSelect={ () => handleSelectResult(result) }
                        />
                    ))}
                    <button className={newEndTableResults.length !== nbChooseItems ? 'disabled' : ''} onClick={ handleDeleteConfirm }>
                        Valider
                    </button>
                </div>

            )}

        </section>
    )
}
