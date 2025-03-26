// componentes precisam ter letras maiúsculas (são o que os identificam como componentes)
// método antigo de lidar com componentes


import React, { Component } from "react"; // component é a base para criar componentes
import './Main.css';

export default class Main extends Component { // criando um componente com estado
    constructor(props) {
        super(props); // passando propriedades para a criação de variáveis de estado. Super herda o conctrutor da classe pai que "component" possui
    
        this.state = { // criando um estado que guardará informações de um input
            // estado é um objeto que armazena dados temporários, perimitindo modificá-los ao longo do tempo
            novaTarefa: '',
        };

        this.inputMudou = this.inputMudou.bind(this); // "bind()" nese contexto permite que inputMudou tenha "this" como contexto correto, permitindo-o acessar o estado e outro métodos da classe
    }

    inputMudou(e) { // recebendo o evento enviado por onChange
        this.setState({ // setState é o método utilizado para atualizar o estado do componente
            novaTarefa: e.target.value // atribuindo à chave do objeto "state" chamada "novaTarefa" o valor do evento disparado pela mudança no estado do input
        })
    }
    
    render() {
        const { novaTarefa } = this.state; // utilizando destructuring(desestruturação) para extrair a propriedade "novaTarefa" do estado e torná-la uma variável local

        return (
            <div className="main">
                <h1>Fomulário interativo com o uso antigo de useState</h1> {/*criando um componente que contém um título */}
                <p>{novaTarefa}</p>

                <form action="#">
                    <input type="text" onChange={this.inputMudou}/>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        )
    }
}
