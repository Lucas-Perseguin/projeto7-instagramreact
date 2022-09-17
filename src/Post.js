import React from "react"

export default function Post(props) {
    const [isLiked, setLiked] = React.useState(false)
    const [isSaved, setSaved] = React.useState(false)

    return (
        <div className="post" key={props.currentIndex}>
            <div className="topo">
                <div className="usuario">
                    <img src={props.userImg} />
                    {props.userName}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                {props.content}
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
                            style={isLiked ? { color: "red" } : { color: "black" }}
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
                            style={{ color: "black" }}
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
}