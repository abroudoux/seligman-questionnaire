// React
import { useState, useEffect } from 'react';

// Data
import tableResults from './data/tableResults';

// Functions
import scrollToTop from '../../functions/scrollToTop';

// Interface
import qualitiesDataProps from './interface/interface-qualities';

// Models
import ResultModel from './models/ResultModel';
import ResultDeleteModel from './models/ResultDeleteModel';

// Style
import './results.scss';


export default function Results() {

    // useState & var
    const [ newEndTableResults, setNewEndTableResults ] = useState<qualitiesDataProps[]>([]);
    const [ isTableFull, setIsTableFull ] = useState(false);
    let [ newTableResults, setNewTableResults ] = useState<{ id: number, value: number, quality: string, description: string }[]>([]);

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
    let nbChooseItems: number = 5 - startTableResults.length;


    // Choose results
    const handleSelectResult = (result: qualitiesDataProps) => {

        setNewEndTableResults((prevEndTableResults) => {
            const isResultPresent = prevEndTableResults.some((item) => item.id === result.id);

            if ( isResultPresent ) {
                return prevEndTableResults.filter((item) => item.id !== result.id);
            } else {
                if ( prevEndTableResults.length >= nbChooseItems ) {
                    const updatedResults = prevEndTableResults.slice(1).concat(result);
                    return updatedResults;
                } else {
                    return [...prevEndTableResults, result];
                }
            }
        });

    };

    useEffect(() => {
        console.log(newEndTableResults);
    }, [newEndTableResults]);

    // 
    // if ( newEndTableResults.length === nbChooseItems ) {
    //     setIsTableFull(true);
    // }

    // Confirm results
    const handleDeleteConfirm = () => {
        const updatedTableResults = startTableResults.concat(newEndTableResults);
        setNewTableResults(updatedTableResults);
        setTimeout(scrollToTop, 100);
    };

    // console.log(tableResults, startTableResults, endTableResults);

    return (

        <section id="results">

            { tableResults.length === 5 ? (

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
                </div>

            ) : newTableResults.length === 5 ? (

                <div className="results-section">
                    <h1>🤩 Vos 5 pincipales forces de caractères :</h1>
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
                            // className={isTableFull ? 'disabled' : ''}
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
