// Images
import christophe from "../../assets/pp_christophe.jpeg";
import patrice from "../../assets/pp_patrice.jpeg";

// Style
import './contact.scss';


export default function Contact() {

    return (
        <section id="contact">
            <h1>Qui sommes-nous ?</h1>

            <div id="presentations">

                <div className="presentation">
                    <img src={ christophe } alt="Image Christophe de Cacqueray" />
                    <h2>Christophe de Cacqueray</h2>
                    <p>
                        Christophe est l'ancien directeur de l'innovation d'un grand groupe d'assurance et le co-fondateur de Krakn Behavioural. Expert de la relation client, il a occupé des fonctions de direction dans plusieurs entreprises en France et en Europe.
                    </p>
                    <ul>
                        <li>
                            <a href="https://fr.linkedin.com/in/c2cacqueray" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:christophe@krakn.fr">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                    <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="presentation">
                    <img src={ patrice } alt="Image Patrice Thiriez" />
                    <h2>Patrice Thiriez</h2>
                    <p>
                    Patrice est initialement issu du monde des startups, où il a piloté le Marketing chez les grands acteurs de la finance digitale, avant d'être en charge de l'Innovation puis Directeur de l'Expérience Client au sein d'un grand groupe d'assurance français.
                    </p>
                    <ul>
                        <li>
                            <a href="https://fr.linkedin.com/in/patrice-thiriez-2b6664" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:patrice@krakn.fr">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                    <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

        </section>
    )
}
