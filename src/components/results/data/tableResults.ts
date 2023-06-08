// Data
import qualities from "./qualities";

// Function
import convertPropertiesToNumbers from "../functions/convertToNumbers";

// Create tableResults
let tableResults : {
    index: number; id: number, value: number, quality: string 
}[] = [];


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
    const tableQualities: { id: number; value: number; quality: string }[] = tableC.map((element: { value: number }, index: number) => {
        return {
            id: tableC[index].id,
            quality: qualities[index].quality,
            value: tableC[index].value,
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

export default tableResults;
