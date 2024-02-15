import React from 'react'
import styles from './todoItem.module.css'

function TodoItem({item, todos, setTodos}) {

  function handleDelete(item){
    console.log("Delete button clicked for item", item);
    setTodos(todos.filter((t) => t !== item));
  }

  function handleClick(itemName){
    const newArray =  todos.map((todoItem) => todoItem.name === itemName ? {...todoItem, done: !todoItem.done} : todoItem);

    setTodos(newArray);
  }

  const classCheckDone = item.done ? styles.completed : "";

  return (
      <div className={styles.item}>
        <div className={styles.itemName}>
          <span onClick={() => handleClick(item.name)} className={classCheckDone}>
            {item.name}
          </span>
          
          <span>
            <button onClick={() => handleDelete(item)}  className={styles.deleteButton}>X</button>
          </span>

        </div>
        
        <hr className={styles.line}/>
      </div>
  )
}

export default TodoItem