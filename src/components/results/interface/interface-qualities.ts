export default interface qualitiesDataProps {
    id: number,
    index?: number,
    quality: string,
    value: number,
    description: string,
    onSelect? : (props: qualitiesDataProps) => void,
    isDisabled? : boolean,
};
