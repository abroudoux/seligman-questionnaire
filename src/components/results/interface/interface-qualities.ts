export default interface qualitiesDataProps {
    index: number,
    id: number,
    quality: string,
    description: string,
    onSelect: (index: number) => void,
};
