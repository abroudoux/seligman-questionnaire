export default interface qualitiesDataProps {
    id: number,
    quality: string,
    value: number,
    description: string | undefined,
    onSelect: (props: qualitiesDataProps) => void,
};
