import ConteudoSobre from "../Componentes/ConteudoSobre";
import ImagemS from "../Componentes/ImagemS";
import ImagemS2 from "../Componentes/ImagemS2";
import Planos from "../Componentes/Planos";


function Sobre() {
    return (
<>
<div className="sobre-info">
    <section id='info'>
        <ConteudoSobre />
        <ImagemS />
        <ImagemS2 />
    </section>
    </div>
    <div>
        <Planos/>
    </div>

    </>
    );
}

export default Sobre   