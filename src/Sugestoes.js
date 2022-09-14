const sugestoes = [
    { img: '../assets/img/smallcutecats.svg', nome: 'smallcutecats' },
    { img: '../assets/img/nathanwpylestrangeplanet.svg', nome: 'nathan_pyle' },
    { img: '../assets/img/adorable_animals.svg', nome: 'adorable.animals' },
    { img: '../assets/img/chibirdart.svg', nome: 'chibirdart' },
    { img: '../assets/img/wawawicomics.svg', nome: 'wawawiwa.comics' }
]

export default function Sugestoes() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map((sugestao, index) => {
                return (
                    <div class="sugestao" key={index}>
                        <div class="usuario">
                            <img src={sugestao.img} />
                            <div class="texto">
                                <div class="nome">{sugestao.nome}</div>
                                <div class="razao">Segue você</div>
                            </div>
                        </div>

                        <div class="seguir">Seguir</div>
                    </div>
                );
            })}
        </div>
    );
}