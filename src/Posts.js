import Icon from "./Icon.js"

const posts = [
    { usuarioImg: '/assets/img/meowed.svg', nome: 'meowed', conteudo: <img src='/assets/img/gato-telefone.svg' /> },
    { usuarioImg: '/assets/img/barked.svg', nome: 'barked', conteudo: <img src='/assets/img/dog.svg' />},
    { usuarioImg: '/assets/img/filomoderna.svg', nome: 'filosofia_moderna',
    conteudo: <video width="100%" height="612px" autoPlay muted>
        <source src='/assets/video/video.mp4' type='video/mp4'/>
        <source src='/assets/video/video.ogv' type='video/ogg'/>
        </video> }
];

export default function Posts() {
    return (
        <div className="posts">
            {posts.map((post, index) => {
                return(
                    <div className="post" key={index}>
                        <div className="topo">
                            <div className="usuario">
                                <img src={post.usuarioImg} />
                                {post.nome}
                            </div>
                            <div className="acoes">
                                <ion-icon name="ellipsis-horizontal"></ion-icon>
                            </div>
                        </div>

                        <div className="conteudo">
                            {post.conteudo}
                        </div>

                        <div className="fundo">
                            <div className="acoes">
                                <div>
                                    <Icon name="heart-outline" icon="heart" color="red" />
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                </div>
                                <div>
                                    <Icon name="bookmark-outline" icon="bookmark" color="black" />
                                </div>
                            </div>

                            <div className="curtidas">
                                <img src="/assets/img/respondeai.svg" />
                                <div className="texto">
                                    Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}