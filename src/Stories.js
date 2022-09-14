const stories = [
    { img: '../assets/img/9gag.svg', nome: '9gag' },
    { img: '../assets/img/meowed.svg', nome: 'meowed' },
    { img: '../assets/img/bad.vibes.memes.svg', nome: 'bad.vibes.memes' },
    { img: '../assets/img/barked.svg', nome: 'barked' },
    { img: '../assets/img/razoesparaacreditar.svg', nome: 'razoesparaacreditar' },
    { img: '../assets/img/filomoderna.svg', nome: 'filosofia.moderna' },
    { img: '../assets/img/memeriagourmet.svg', nome: 'memeria.gourmet' },
    { img: '../assets/img/catanacomics.svg', nome: 'catanacomics' }
];

export default function Stories() {
    return (
        <div class="stories">
            {stories.map((story, index) => {
                return (
                    <div class="story" key={index}>
                        <div class="imagem">
                            <img src={story.img} />
                        </div>
                        <div class="usuario">
                            {story.nome}
                        </div>
                    </div>
                );
            })}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}
