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

    console.log(tableResults);


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
                />
            ))}

            {!showModal &&
                <div id="results_modal">
                    <h2>Oops, il semble difficle de vous choisir 5 qualités, vous nous aidez à faire un choix ?</h2>
                    <p>Cliquez pour supprimer les qualités qui ne vous correspondent pas le plus</p>
                </div>
            }

            {!showModal && 
                <div className="overlay"></div>
            }



        </section>
    )
}
