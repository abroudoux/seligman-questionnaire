// Data
import qualities from "./qualities";

// Function
import convertPropertiesToNumbers from "../../../functions/convertToNumbers";

function generateTableResults() {

    let tableResults : { id: number, value: number, quality: string, description: string }[] = [];

    if (sessionStorage.getItem('responsesQuestionsA') && sessionStorage.getItem('responsesQuestionsB')) {

        // Get tables from SessionStorage
        const tableA = JSON.parse(sessionStorage.getItem('responsesQuestionsA') || '{}');
        const tableB = JSON.parse(sessionStorage.getItem('responsesQuestionsB') || '{}');

        // Sort tables
        tableA.sort((a: { idQuestion: string; }, b: { idQuestion: string; }) => a.idQuestion.localeCompare(b.idQuestion));
        tableB.sort((a: { idQuestion: string; }, b: { idQuestion: string; }) => a.idQuestion.localeCompare(b.idQuestion));

        // Convert values to number
        convertPropertiesToNumbers(tableA);
        convertPropertiesToNumbers(tableB);

        // Create tableC with values of tableA & tableB
        const tableC: { id: number; value: number }[] = tableA.map((element: { value: number; }, index: number) => {
            return {
                id: index,
                value: element.value + tableB[index].value
            };
        });

        // Create table with values & qualities
        const tableQualities: { id: number; value: number; quality: string; description: string}[] = tableC.map((element: { value: number }, index: number) => {
            return {
                id: tableC[index].id,
                quality: qualities[index].quality,
                value: tableC[index].value,
                description: qualities[index].description,
            };
        });

        // Sort tableQualities
        tableQualities.sort((a, b) => b.value - a.value);

        const nbResultMin = 5;
        let i = 0;
        let j = 0;
        let k = j;

        while ( tableResults.length < nbResultMin ) {
            let quality = tableQualities[j++];
            tableResults[i++] = quality;

            for ( k = j; k < tableQualities.length; k++ ) {

                if ( tableQualities[k].value === quality.value ) {
                    tableResults[i++] = tableQualities[k];
                    j++;
                } else {
                    break;
                }
            };
        };
    };

    return tableResults;
};

const tableResults = generateTableResults();

export default tableResults;
