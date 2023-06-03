export default interface questionTablesData {
    sort(arg0: (a: { idQuestion: number; }, b: { idQuestion: number; }) => number): unknown;
    idQuestion: number;
    value: number;
}
