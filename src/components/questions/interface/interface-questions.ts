export default interface questionsDataProps {
    id: number,
    question: string,
    number: number,
    type: string;
    calcul: Array<number>;
    onChange: (value: number) => void;
    // onClick: (value: number) => void;
};