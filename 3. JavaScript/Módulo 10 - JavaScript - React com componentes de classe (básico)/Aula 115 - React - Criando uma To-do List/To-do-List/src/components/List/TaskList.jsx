import React from 'react'

export default function TaskList() {

  const listItems = Object.keys(localStorage).map((key, index) => (
    <li key={index}>
      {localStorage.getItem(index)}
    </li>
  ))


  return(
    <ul>
      {listItems}
    </ul>
  );

}
