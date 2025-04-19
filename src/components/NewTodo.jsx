import React, { useState } from 'react'
import styles from './NewTodo.module.css'

const NewTodo = (props) => {

    const [todo, setTodo] = useState({
        title: '',
        desc: ''
    });

    const {title, desc} = todo;

    const handleChange = (e) => {
        const name = e.target.name; 
        setTodo((prev) => {
            return{...prev, [name]: e.target.value}
        }
        )
    }




    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddTodo(todo);
        setTodo({
            title: '',
            desc: ''
        })

    }



  return (
    <form className={styles.form} onSubmit={handleSubmit}>
    <div className={styles['form-field']}>
            <label htmlFor="title">Title: </label>
            <input type="text" id="title" name="title" value={title} onChange={handleChange}/>
        </div>
        <div className={styles['form-field']}>
            <label htmlFor="desc">Description: </label>
            <input type="text" id="desc" name="desc" value={desc} onChange={handleChange} />
        </div>
        <button type="submit">Add Todo</button>
        </form>
    
    
  )
}

export default NewTodo