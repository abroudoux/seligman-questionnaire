// Data
import characterStrenghts from './data/characterStrenghts';

// Model
import ResultModel from './model/ResultModel';

// Interface
import questionTablesData from './interface/interface-tables';

// Style
import './results.scss';


export default function Results() {

    // Get tables from SessionStorage
    const tableA = JSON.parse(sessionStorage.getItem('responsesQuestionsA') || '{}');
    const tableB = JSON.parse(sessionStorage.getItem('responsesQuestionsB') || '{}');

    // Sort tables
    tableA.sort((a: { idQuestion: string; }, b: { idQuestion: string; }) => a.idQuestion.localeCompare(b.idQuestion));
    tableB.sort((a: { idQuestion: string; }, b: { idQuestion: string; }) => a.idQuestion.localeCompare(b.idQuestion));

    // Convert tables data to numbers
    function convertPropertiesToNumbers(table: questionTablesData[]): void {
        table.forEach(obj => {
            obj.idQuestion = String(obj.idQuestion);
            obj.value = Number(obj.value);
        });
    };

    convertPropertiesToNumbers(tableA);
    convertPropertiesToNumbers(tableB);

    // Create tableC with values of tableA & tableB
    const tableC: { id: string; value: number }[] = tableA.map((element: { value: number; }, index: number) => {
        return {
            id: index,
            value: element.value + tableB[index].value
        };
    });

    // Sort tableC
    tableC.sort((a, b) => a.value - b.value);

    console.log( tableA, tableB, tableC );

    return (

        <section>

            <ResultModel />

        </section>
    )
}
