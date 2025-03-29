import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import './taskList.css'

export default function TaskList() {

  const inpt = document.querySelector('#tarefa');

  function handleEditOnClick(key) {
    const tarefa = document.querySelector('#tarefa');
    tarefa.value = localStorage.getItem(key);
    
  }

  function handleDeleteOnClick(key) {
    localStorage.removeItem(key);
    return;
  }

  const listItems = Object.keys(localStorage).map((key) => (
    <li key={key}>
      {localStorage.getItem(key)}
      
      <div className='options'>
        <a onClick={() => handleDeleteOnClick(key)}> <FontAwesomeIcon icon={faTrash} /> </a>
        <a onClick={() => handleEditOnClick(key)}> <FontAwesomeIcon icon={faPenToSquare} /> </a>
      </div>

    </li>
  ))


  return(
    <ul>
      {listItems}
    </ul>
  );

}
