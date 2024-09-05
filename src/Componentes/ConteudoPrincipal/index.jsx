import Imagem from "../Imagem";
import PersonalInfo from "../PersonalInfo";
import Skills from "../Skills";

function ConteudoPrincipal() {
    return (
        <div className="mainInfo">
            <section id='info'>
                <PersonalInfo />
                <Imagem />
            </section>
            {/* <ContactForm /> */}
            <Skills />
        </div>
    );
}

export default ConteudoPrincipal;