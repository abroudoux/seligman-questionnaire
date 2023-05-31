export default interface questionsDataProps {
    id: number,
    question: string,
    number: number,
    type: string;
    onChange: (value: any) => void;
    // onClick: (value: any) => void;
};