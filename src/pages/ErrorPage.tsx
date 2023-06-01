// React
import { Link, useRouteError } from "react-router-dom";


export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <h1>Oops!</h1>
            <p>Désolé, une erreur est apparue.</p>

            <Link to="/">Retourner à l'accueil</Link>
        </>
    )
}