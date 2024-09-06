import ConteudoSobre from "../Componentes/ConteudoSobre";
import ImagemS from "../Componentes/ImagemS";
import ImagemS2 from "../Componentes/ImagemS2";
import Plan from "../Componentes/Plan";


function Sobre() {
    return (
        <div className="sobre-info">
            <section id='info'>
                <ConteudoSobre />
                <ImagemS />
                <ImagemS2 />
            </section>
            <section className="planos">
                <div className="container">
                    <h1>Planos</h1>
                    <Plan />
                </div>
            </section>
        </div>
    );
}

export default Sobre   