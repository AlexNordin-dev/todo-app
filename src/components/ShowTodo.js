import React from "react";
import FixTodo from "./FixTodo";


const ShowTodo = ({ todos, setTodos, data}) => {
   
     
    return (
        <div >
            <h3> Att göra: </h3>
            <ul className="todo-list-output">
                {data.map((todo) => (
                    <FixTodo
                        setTodos={setTodos}
                        todos={todos}
                        key={todo.id}
                        todo={todo}
                        text={todo.text}
                        option={todo.option}
                        date={todo.date}
                        
                    />
                ))}

            </ul>
           
        </div>
    );
};



export default ShowTodo;
