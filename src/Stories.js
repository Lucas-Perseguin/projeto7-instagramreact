const stories = [
    { img: '/assets/img/catanacomics.svg', nome: 'catanacomics' },
    { img: '/assets/img/9gag.svg', nome: '9gag' },
    { img: '/assets/img/meowed.svg', nome: 'meowed' },
    { img: '/assets/img/bad.vibes.memes.svg', nome: 'bad.vibes.memes' },
    { img: '/assets/img/barked.svg', nome: 'barked' },
    { img: '/assets/img/razoesparaacreditar.svg', nome: 'razoesparaacreditar' },
    { img: '/assets/img/filomoderna.svg', nome: 'filosofia.moderna' },
    { img: '/assets/img/memeriagourmet.svg', nome: 'memeria.gourmet' }
    
];

export default function Stories() {
    return (
        <div className="stories">
            {stories.map((story, index) => {
                return (
                    <div className="story" key={index}>
                        <div className="imagem">
                            <img src={story.img} />
                        </div>
                        <div className="usuario">
                            {story.nome}
                        </div>
                    </div>
                );
            })}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}
