// Style
import './results.scss';


export default function Results() {

    const tableA = sessionStorage.getItem('responsesQuestionA') as unknown as Array<{idQuestion: string, value: number}>;
    const tableB = sessionStorage.getItem( 'responsesQuestionB' ) as unknown as Array<{idQuestion: string, value: number}>;

    tableA.sort();
    tableB.sort();

    // for ( i = 0; i <= tableA.length; i++) {
    //     const tableC = [];
    //     tableC.push(); 
    // };

    return (
        <section>
            Résultats
        </section>
    )
}