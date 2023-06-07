// React
import { useState, useEffect } from 'react';

// Data
import tableResults from './data/tableResults';

// Model
import ResultModel from './models/ResultModel';
import ResultDeleteModel from './models/ResultDeleteModel';

// Style
import './results.scss';
import { log } from 'console';


export default function Results() {

    // useState & var
    const [ showResults, setShowResults ] = useState(false);
    const nbDeleteItems: number = tableResults.length - 5;
    const [ deleteEndTableResults, setDeleteEndTableResults ] = useState(tableResults);

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
    const newTableResults = startTableResults.concat(endTableResults);

    // if ( newTableResults.length == 5 || tableResults.length == 5 ) {
    //     setShowResults(true);
    // } else {
    //     setShowResults(false);
    // }

    // useEffect(() => {
    //     const updatedEndTableResults = deleteEndTableResults.slice(lastIndex);
    //     setDeleteEndTableResults(updatedEndTableResults);
    // }, [lastIndex]);

    // const handleRemoveItem = (index: number) => {
    //     removeItemTable(index);
    // };

    // const removeItemTable = (index: number) => {
    //     setDeleteEndTableResults(prevResults => {
    //         const updatedResults = [...prevResults];
    //         updatedResults.splice(index, 1);
    //         return updatedResults;
    //     });
    // };

    const test = () => {
        makeATest();
    }

    const makeATest = () => {
        console.log('test');

    }


    return (

        <section id="results">

            {showResults ? (

                <div className="results-section">
                    <h1>Vos 5 forces de caractères :</h1>
                    {newTableResults.map((result, index) => (
                        <ResultModel
                            key={index}
                            id={result.id}
                            quality={result.quality}
                            number={0}
                            description={''}
                            // onClick={() => handleRemoveItem()}
                        />
                    ))}
                </div>

            ) : (

                <div className="results-section">
                    <h1>
                        Oops, il semble difficile de choisir 5 qualités, vous nous aidez à faire un choix ?
                    </h1>
                    {nbDeleteItems > 1 &&
                        <p>Supprimez les {nbDeleteItems} qualités qui vous correspondent le moins</p>
                    }
                    {nbDeleteItems === 1 &&
                        <p>Supprimez la qualité qui vous correspond le moins</p>
                    }
                    {endTableResults.map((result, index) => (
                        <ResultDeleteModel
                            key={index}
                            id={result.id}
                            quality={result.quality}
                            number={0}
                            description={''}
                            // onClick={() => test()}
                        />
                    ))}
                    {/* <button className={responsesQuestionsA.length !== questionsA.length ? 'disabled' : ''}>
                        Suivant
                    </button> */}
                    <button>
                        Suivant
                    </button>
                </div>

            )}

        </section>
    )
}
