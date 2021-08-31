import React from "react"

export class ComponentesControlados extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            nome: "",
            email: "",
            cpf: "",
            sexo: "",
            cidade:""
        }
    }

    handleChange = e => {
        const value = e.target.value
        const name = e.target.name
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form>
                <label>
                    Nome:
                <input
                        type="text"
                        name="nome"
                        onClick={this.handleChange}
                        value={this.state.nome} />
                </label>
                <label>
                    E-mail:
                <input
                        type="email"
                        name="email"
                        onClick={this.handleChange}
                        value={this.state.email} />
                </label>
                <label>
                    CPF:
                <input
                        type="text"
                        name="cpf"
                        onClick={this.handleChange}
                        value={this.state.cpf} />
                </label>
                <label>
                    <input
                        type="radio"
                        name="sexo"
                        value="feminino"
                        onClick={this.handleChange}
                    /> Feminino
            </label>
                <label>
                    <input
                        type="radio"
                        name="sexo"
                        value="maculino"
                        onClick={this.handleChange}
                    /> Masculino
            </label>
            <select value={this.state.cidade} name="cidade" onChange={this.handleChange}>
                <option value="blumenau">Blumenau</option>
                <option value="indaial">Indaial</option>
                <option value="timbo">Timbó</option>
            </select>
                <button>Enviar</button>
            </form>
        )
    }
}