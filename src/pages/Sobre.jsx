import ConteudoSobre from "../Componentes/ConteudoSobre";
import ImagemS from "../Componentes/ImagemS";
import ImagemS2 from "../Componentes/ImagemS2";


function Sobre() {
    return (
        <div className="sobre-info">
            <section id='info'>
                <ConteudoSobre />
                <div className="imgS">
                    <ImagemS />
                </div>
                <ImagemS2 />
            </section>
        </div>
    );
}

export default Sobre   