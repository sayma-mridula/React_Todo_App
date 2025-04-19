import React from 'react'
import styles from './Todo.module.css'

const Todo = (props) => {
    const { title, desc} = props.todo; 
    const { id } = props; 

    const handleClick = (id) => {
        props.onRemoveTodo(id);

    }

  return (
    <article className={styles.todo}>
        <div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
        <button className={styles.btn} onClick={() => {handleClick(id)}}>
            <i className='fa fa-trash fa-2x' ></i>
        </button>
    </article>
  )
}



export default Todo


