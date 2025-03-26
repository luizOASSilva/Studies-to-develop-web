import React, { useState } from 'react'
import './Form.css'

export default function Form() {

    const [error, setError] = useState();
    
    class Task{
        constructor(e){
            this.tarefa = e.target.elements.tarefa.value; 
        }

        isValid() {
            if(!this.tarefa) {
                setError(true);
                return;
            } 

            this.setLocalSorage();
        }

        setLocalSorage() {
            localStorage.setItem(`${localStorage.length + 1}`, `${this.tarefa}`);
        

        }
    }

    function handleOnSubmit(e) {
        e.preventDefault();

        const task = new Task(e)
        task.isValid();
    }


  return (
    <>
        <form action="#" className='form' onSubmit={handleOnSubmit}>
            <p className='error' style={{display: error? 'block' : 'none'}}>Este campo não pode estar vazio</p>
            <label htmlFor="tarefa">Digite uma tarefa:</label>
            <input type="text" name="tarefa" id="tarefa" style={{border: `0.15rem solid ${error? 'red' : 'black'}`}}/>
            <input type="submit" value="Enviar tarefa"/>
        </form>
    </>
  )
}
