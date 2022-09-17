import React from "react"
import Post from "./Post.js"

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
                    <Post userImg={post.usuarioImg} userName={post.nome} content={post.conteudo} currentIndex={index}/>
                )
            })}
        </div>
    )
}