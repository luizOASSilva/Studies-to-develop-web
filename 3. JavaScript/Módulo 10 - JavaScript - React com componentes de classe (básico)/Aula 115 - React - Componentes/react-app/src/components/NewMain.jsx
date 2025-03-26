// nova abordagem para o uso de estados
import React, { useState } from "react";

export default function NewMain() {

    const [text, setText] = useState('');

    function handleChange(e) {
        setText(e.target.value);
    }

    return(
        <div>
            <h1>Formulário interativo com novo uso do useState</h1>
            <form action="#">
                <input type="text" onChange={handleChange}/>
                <button type="submit">Enviar</button>
            </form>
            <p>Texto digitado: {text}</p>
        </div>
    );
};
