// Interface
import questionTablesData from './interface/interface-tables';

// Style
import './results.scss';


export default function Results() {

    // Get tables from SessionStorage
    const tableA: questionTablesData[] = JSON.parse(sessionStorage.getItem('responsesQuestionsA') || '{}');
    const tableB: questionTablesData[] = JSON.parse(sessionStorage.getItem('responsesQuestionsB') || '{}');

    console.log( tableA, tableB );

    // Trier par ordre alphabétique
    // tableA.sort((a: { idQuestion: number; }, b: { idQuestion: number; }) => a.idQuestion - b.idQuestion);
    // tableB.sort((a: { idQuestion: number; }, b: { idQuestion: number; }) => a.idQuestion - b.idQuestion);
    tableA.sort((a, b) => Number(a.idQuestion) - Number(b.idQuestion));
    tableB.sort((a, b) => Number(a.idQuestion) - Number(b.idQuestion));

    console.log( tableA, tableB );

    return (

        <section>
            <h1>
                Results
            </h1>
        </section>
    )
}
