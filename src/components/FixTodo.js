import React from "react";

const FixTodo = ({ text, option, date, todo, todos, setTodos }) => {
    //Events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    const doneHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    };


    return (
        <div className="todo todoLiCreate">
            <li className={`todoLiCreate ${todo.completed ? "done" : ""}`}>
                <span className="todo-item">{text}</span>
                <span className={"todo-date-create"}>{date}</span>
                <span className="todo-category-create">{option}</span>
                <button onClick={doneHandler} className="done-btn">
                    <i className="fas fa-check"></i></button>
                <button onClick={deleteHandler} className="delete-btn">
                    <i className="fas fa-trash"></i></button>
            </li>
        </div>
    );
};

export default FixTodo;