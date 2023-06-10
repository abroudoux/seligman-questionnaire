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
    let nbChooseItems: number = tableResults.length - 5;
    const [ showResults, setShowResults ] = useState(true);
    const [ newEndTableResults, setNewEndTableResults ] = useState<qualitiesDataProps[]>([]);
    let newTableResults : { id: number, value: number, quality: string, description: string }[] = [];

    // Create & slice tables
    const newValue = tableResults[tableResults.length - 1].value;
    let lastIndex = -1;

    for (let i = tableResults.length - 1; i >= 0; i--) {
        if (tableResults[i].value !== newValue) {
            lastIndex = i + 1;
            break;
        }
    };

    const startTableResults = tableResults.slice(0, lastIndex);
    const endTableResults = tableResults.slice(lastIndex);

    // Choose results
    const handleSelectResult = (result: qualitiesDataProps) => {

            const isResultPresent = newEndTableResults.some(item => item.id === result.id);

            if ( isResultPresent ) {
                setNewEndTableResults(newEndTableResults.filter(item => item.id !== result.id));
            } else if ( newEndTableResults.length === nbChooseItems ) {
                newEndTableResults.shift();
                setNewEndTableResults([...newEndTableResults, result]);
            } else {
                setNewEndTableResults([...newEndTableResults, result]);
            }

        console.log(newEndTableResults);
    };

    // Confirm results
    const handleDeleteConfirm = () => {
        if ( newEndTableResults.length === nbChooseItems ) {
            newTableResults = startTableResults.concat(newEndTableResults);
            console.log(newTableResults);
            setShowResults(true);
        }
    };

    // console.log(tableResults);

    // Show Results 
    // if ( tableResults.length === 5 ) {
    //     setShowResults(true);
    // } else {
    //     setShowResults(false);
    // }

    return (

        <section id="results">

            {showResults ? (

                <div className="results-section">
                    <h1>🤩 Vos 5 pincipales forces de caractères :</h1>
                    {tableResults.map((tableResults) => (
                        <ResultModel
                            key={tableResults.id}
                            id={tableResults.id}
                            quality={tableResults.quality}
                            value={tableResults.value}
                            description={tableResults.description}
                        />
                    ))}
                    {newTableResults.map((newTableResults) => (
                        <ResultModel
                            key={newTableResults.id}
                            id={newTableResults.id}
                            quality={newTableResults.quality}
                            value={newTableResults.value}
                            description={newTableResults.description}
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
                        <p>Choisissez la qualité qui vous correspond le plus puis validez vore réponse</p>
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
                    <button onClick={() => handleDeleteConfirm }>
                    {/* <button className={newEndTableResults.length !== nbChooseItems ? 'disabled' : ''} onClick={ handleDeleteConfirm }> */}
                    {/* <button className={newEndTableResults.length !== nbChooseItems ? 'disabled' : ''}> */}
                        Valider
                    </button>
                </div>

            )}

        </section>
    )
}
