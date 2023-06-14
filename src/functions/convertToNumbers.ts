// Interface
import questionTablesData from "../components/results/interface/interface-tables";


export default function convertPropertiesToNumbers(table: questionTablesData[]): void {
    table.forEach(obj => {
        obj.idQuestion = String(obj.idQuestion);
        obj.value = Number(obj.value);
    });
};