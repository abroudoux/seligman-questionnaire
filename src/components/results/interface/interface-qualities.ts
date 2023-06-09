export default interface qualitiesDataProps {
    id: number,
    quality: string,
    value: number,
    description: string,
    onSelect?: (props: qualitiesDataProps) => void,
};
