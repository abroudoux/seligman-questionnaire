// React
import { useState } from 'react';

// Data
import tableResults from './data/tableResults';

// Model
import ResultModel from './model/ResultModel';

// Style
import './results.scss';


export default function Results() {

    // useState 
    const [ showModal, setShowModal ] = useState(true);

    const nbDeleteItems: number = tableResults.length - 5;

    // Create tabResultsChoices
    const newValue = tableResults[tableResults.length - 1].value;
    let lastIndex = -1;

    for (let i = tableResults.length - 1; i >= 0; i--) {
        if (tableResults[i].value !== newValue) {
            lastIndex = i + 1;
            break;
        };
    };
    const newTableResults = tableResults.slice(lastIndex);

    console.log( tableResults, newTableResults );


    return (

        <section id="results">

            <div id="results_title">
                <h1>Vos 5 forces de caractères :</h1>
            </div>

            {tableResults.map((tableResults, index) => (
                <ResultModel 
                    key={index}
                    id={tableResults.id}
                    quality={tableResults.quality} 
                    number={0} 
                    description={''}
                />
            ))}

            {!showModal &&
                <div id="results_modal">
                    <h2>Oops, il semble difficle de vous choisir 5 qualités, vous nous aidez à faire un choix ?</h2>
                    {nbDeleteItems > 1 &&
                        <p>Supprimez les { nbDeleteItems } qualités qui vous correspondent le moins </p>
                    }
                    {nbDeleteItems < 1 &&
                        <p>Supprimez la qualité qui vous correspond le moins </p>
                    }
                    {newTableResults.map((newTableResults, index) => (
                        <ResultModel 
                            key={index}
                            id={newTableResults.id}
                            quality={newTableResults.quality} 
                            number={0} 
                            description={''}
                        />
                    ))}
                </div>
            }

            {!showModal && 
                <div className="overlay"></div>
            }



        </section>
    )
}
