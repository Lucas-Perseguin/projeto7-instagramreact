import React from "react"

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
    const [isLiked, setLiked] = React.useState(false)
    const [isSaved, setSaved] = React.useState(false)

    return (
        <div className="posts">
            <script></script>
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
                                    <ion-icon
                                    onClick={() => {
                                        const prevState = isLiked
                                        setLiked(!prevState)
                                    }}
                                    name={isLiked ? "heart" : "heart-outline"}
                                    style={isLiked ? {color: "red"} : {color: "black"}}
                                    ></ion-icon>
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                </div>
                                <div>
                                    <ion-icon
                                    onClick={() => {
                                        const prevState = isSaved
                                        setSaved(!prevState)
                                    }}
                                    name={isSaved ? "bookmark" : "bookmark-outline"}
                                    style={{color: "black"}}
                                    ></ion-icon>
                                </div>
                            </div>

                            <div className="curtidas">
                                <img src="/assets/img/respondeai.svg" />
                                <div className="texto">
                                    Curtido por <strong>respondeai</strong> e <strong>outras {isLiked ? "101.524" : "101.523"} pessoas</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}