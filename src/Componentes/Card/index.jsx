export default function Card({ dados }) {

    return (
        <>
            {
                dados.map((pegaDados, index) => (
                    <div
                        className="skill-card"
                        key={index}
                        style={
                            {
                                backgroundColor: pegaDados.color
                            }
                        }
                    >
                        <div className="skillcard">
                            <div className="row">
                                <p>0{index + 1}</p>
                                <img
                                    src={pegaDados.icone}
                                    style={{ width: '24px', height: '24px' }}
                                />
                            </div>
                            <h3>{pegaDados.titulo}</h3>
                            <p className="cont">{pegaDados.conteudo}</p>
                        </div>
                    </div>
                ))
            }

        </>

    )
}