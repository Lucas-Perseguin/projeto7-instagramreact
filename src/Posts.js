const posts = [
    { usuarioImg: '../assets/img/meowed.svg', nome: 'meowed', conteudo: <img src='../assets/img/gato-telefone.svg' /> },
    { usuarioImg: '../assets/img/barked.svg', nome: 'barked', conteudo: <img src='../assets/img/dog.svg' />},
    { usuarioImg: '../assets/img/filomoderna.svg', nome: 'filosofia_moderna',
    conteudo: <video width="100%" height="612px" autoPlay muted>
        <source src='../assets/video/video.mp4' type='video/mp4'/>
        <source src='../assets/video/video.ogv' type='video/ogg'/>
        </video> }
];

export default function Posts() {
    return (
        <div class="posts">
            {posts.map((post, index) => {
                return(
                    <div class="post" key={index}>
                        <div class="topo">
                            <div class="usuario">
                                <img src={post.usuarioImg} />
                                {post.nome}
                            </div>
                            <div class="acoes">
                                <ion-icon name="ellipsis-horizontal"></ion-icon>
                            </div>
                        </div>

                        <div class="conteudo">
                            {post.conteudo}
                        </div>

                        <div class="fundo">
                            <div class="acoes">
                                <div>
                                    <ion-icon name="heart-outline"></ion-icon>
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                </div>
                                <div>
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </div>
                            </div>

                            <div class="curtidas">
                                <img src="assets/img/respondeai.svg" />
                                <div class="texto">
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