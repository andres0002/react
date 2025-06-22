// js
// react
// third
// own
import { Link } from "../components/Link";
import { useI18n } from "../hooks/useI18n";


function AboutPage({routeParams}) {
    const i18n = useI18n(routeParams.lang ?? 'es');
    return (
    <>
        <h1>{i18n.about.title}</h1>
        <p>
            {i18n.about.description}
        </p>
        <Link to='/'>{i18n.about.btnText}</Link>
    </>
    )
}

// exports.
export default AboutPage;