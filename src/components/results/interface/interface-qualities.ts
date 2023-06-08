export default interface qualitiesDataProps {
    index: number,
    id: number,
    quality: string,
    value: number,
    description: string,
    onSelect: (index: number) => void,
};
