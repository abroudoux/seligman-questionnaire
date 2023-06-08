export default interface questionsDataProps {
    id: number,
    question: string,
    number: number,
    type: string;
    calcul: Array<number>;
    onChange: (idQuestion: string, value: number) => void;
};
