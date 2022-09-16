const sugestoes = [
    { img: '/assets/img/smallcutecats.svg', nome: 'smallcutecats' },
    { img: '/assets/img/nathanwpylestrangeplanet.svg', nome: 'nathan_pyle' },
    { img: '/assets/img/adorable_animals.svg', nome: 'adorable.animals' },
    { img: '/assets/img/chibirdart.svg', nome: 'chibirdart' },
    { img: '/assets/img/wawawicomics.svg', nome: 'wawawiwa.comics' }
]

export default function Sugestoes() {
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map((sugestao, index) => {
                return (
                    <div className="sugestao" key={index}>
                        <div className="usuario">
                            <img src={sugestao.img} />
                            <div className="texto">
                                <div className="nome">{sugestao.nome}</div>
                                <div className="razao">Segue você</div>
                            </div>
                        </div>

                        <div className="seguir">Seguir</div>
                    </div>
                );
            })}
        </div>
    );
}