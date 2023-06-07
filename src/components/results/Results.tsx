// React
import { useState } from 'react';

// Data
import tableResults from './data/tableResults';

// Model
import ResultModel from './model/ResultModel';

// Style
import './results.scss';


export default function Results() {

    // useState & var
    const [ showResults, setShowResults ] = useState(false);
    const nbDeleteItems: number = tableResults.length - 5;

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

    console.log( tableResults, startTableResults, endTableResults, newTableResults );

    // delete endTableResults[0];


    // if ( newTableResults.length = 5 ) {
    //     setShowResults(true);
    // } else {
    //     setShowResults(false);
    // }

    // Remove items from endTableResults

    return (

        <section id="results">

            {showResults &&
                <>
                <div id="results_final">
                    <h1>Vos 5 forces de caractères :</h1>
                </div>

                {newTableResults.map((newTableResults, index) => (
                    <ResultModel
                        key={index}
                        id={newTableResults.id}
                        quality={newTableResults.quality}
                        number={0}
                        description={''}
                    />
                ))}
                </>
            }

            {!showResults &&
                <div id="results_choices"> 
                    <h2 id="results_choices_title">Oops, il semble difficle de choisir 5 qualités, vous nous aidez à faire un choix ?</h2>
                    {nbDeleteItems > 1 &&
                        <p>Supprimez les { nbDeleteItems } qualités qui vous correspondent le moins</p>
                    }
                    {nbDeleteItems < 1 &&
                        <p>Supprimez la qualité qui vous correspond le moins</p>
                    }
                    {endTableResults.map((endTableResults, index) => (
                        <ResultModel
                            key={index}
                            id={endTableResults.id}
                            quality={endTableResults.quality}
                            number={0}
                            description={''}
                        />
                    ))}
                </div>
            }

        </section>
    )
}
