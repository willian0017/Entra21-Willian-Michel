export function ManipulandoEventos(){
    function handleClick(){
        alert("Você clicou no botão")
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log("Formulário enviado");
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text"></input>
            <buttton onClick={handleClick}>Clique em mim!</buttton>
        </form>
    )
}