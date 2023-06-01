// Styles
import './footer.scss';

// Logo
import logo from '../../../public/assets/logo_krakn.png'


export default function Footer() {

    return (

        <footer>
            <div id="footer_logo">
                <a href="">
                    <img src={ logo } alt="Logo Krakn" />
                </a>
            </div>
            <ul>
                <li>
                    <a href="https://fr.linkedin.com/company/hi-is-nice" target="_blank">Linkedin</a>
                </li>
                <li>
                    <a href="https://krakn-behavourial.webflow.io/formations/formation-influence-krakn-behavioural" target="_blank" rel="noreferrer">Site Internet</a>
                </li>
            </ul>
            <p>© 2023 Krakn Behavioural. Tous droits réservés</p>
        </footer>
    )
}
