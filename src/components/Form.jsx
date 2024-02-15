import React from 'react'
import { useState } from 'react';
import styles from './form.module.css'

function Form({todos, setTodos}) {

    const [todo, setTodo] = useState({name:"", done:false});


    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({name:"", done:false});
     }

  return (

        <form onSubmit={handleSubmit} className={styles.todoForm}>
            <div className={styles.inputContainer}>

            <input className={styles.modernInput}  
                type="text" 
                value={todo.name} 
                onChange={(e) => setTodo({name: e.target.value, done: false})}
                placeholder='Enter Todo Item'
            />

            <button type="submit" className={styles.modernButton}>Add</button>
            
            </div>
        </form>

  )
}

export default Form