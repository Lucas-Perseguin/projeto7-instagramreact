import React from "react"

export default function Usuario() {
    let [user, setUser] = React.useState("catanacomics")
    let [img, setImg] = React.useState("/assets/img/catanacomics.svg")
    let [nome, setNome] = React.useState("Catana")
    const [isEdited, setEdit] = React.useState(false);
    function editUser(){
        const novoNome = document.getElementById('nome-usuario').value
        const novoUser = document.getElementById('@usuario').value
        const novaImg = document.getElementById('img-usuario').value
        if (novoNome){
            setNome(novoNome)
        }
        if (novoUser){
            setUser(novoUser)
        }
        if (novaImg){
            setImg(novaImg)
        }
    }
    return (
        <div className="usuario">
            <img src={img} />
            <div className="texto">
                <strong>{user}</strong>
                {nome}
            </div>
            <ion-icon name="create-outline" id="edit-user"
            onClick={() => {setEdit(true)}}></ion-icon>
            <div className="user-edit"
            style={isEdited ? {display: "flex", gap: "10px", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: "4"} : 
            {display: "none"}}>
                <ion-icon name="close-circle-outline" onClick={() => {
                    setEdit(false)
                    editUser();
                    }}></ion-icon>
                <h1>Edição de usuário</h1>
                <input type="text" placeholder="Nome de usuário" id="nome-usuario"></input>
                <input type="text" placeholder="@ do usuário" id="@usuario"></input>
                <input type="url" placeholder="Imagem de perfil" id="img-usuario"></input>
            </div>
            <div className="blur" style={isEdited ? {display: "block", zIndex: "3"} : {display: "none"}}></div>
        </div>
    );
}