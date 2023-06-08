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

    // deleteResults
    const handleSelectResult = (index: number, result: qualitiesDataProps) => {

        const isResultPresent = newEndTableResults.some(item => item.id === result.id);

        if (isResultPresent) {
            newEndTableResults = newEndTableResults.filter(item => item.id !== result.id);
        } else {
            if (newEndTableResults.length === nbChooseItems) {
                newEndTableResults.shift();
            }
            newEndTableResults.push(result);
        }

        console.log(newEndTableResults);
    };

    // Create & Slice tables
    const newValue = tableResults[tableResults.length - 1].value;
    let lastIndex = -1;

    for ( let i = tableResults.length - 1; i >= 0; i-- ) {
        if ( tableResults[i].value !== newValue ) {
            lastIndex = i + 1;
            break;
        };
    };
    const endTableResults = tableResults.slice(lastIndex);
    const startTableResults = tableResults.slice(0, lastIndex);
    const newTableResults = startTableResults.concat(newEndTableResults);

    return (

        <section id="results">

                {showResults ? (
                // {showResults && (newTableResults.length === 5 || tableResults.length === 5) ? (

                <div className="results-section">
                    <h1>Vos 5 forces de caractères :</h1>
                    {newTableResults.map((result, index) => (
                        <ResultModel
                            key={index}
                            id={result.id}
                            quality={result.quality}
                            value={result.value}
                            description={''}
                            onClick={() => handleSelectResult(index)}
                        />
                    ))}
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
                    {endTableResults.map((result, index) => (
                        <ResultDeleteModel
                            index={index}
                            key={result.id}
                            id={result.id}
                            quality={result.quality}
                            value={result.value}
                            description={''}
                            onSelect={ () => handleSelectResult(index, result) }
                        />
                    ))}
                    {/* <button className={selectedValues !== nbDeleteItems ? 'disabled' : ''} onClick={ handledeleteItemsConfirm }> */}
                    <button className={newEndTableResults.length === nbChooseItems ? '' : 'disabled'}>
                        Valider
                    </button>
                </div>

            )}

        </section>
    )
}
