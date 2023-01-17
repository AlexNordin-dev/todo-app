import React from 'react';
const GetTodo = ({ inputText, setInputText, inputOption, setInputOption, inputDate, setInputDate, todos, setTodos }) => {

    const inputTextHandler = (e) => {
        // console.log(e.target.value);
         setInputText(e.target.value);
     };
 
     const dateHandler = (e) => {
         //console.log(e.target.value);
         setInputDate(e.target.value);
     };
 
     const optionHandler = (e) => {
         //console.log(e.target.value);
         setInputOption(e.target.value);
     };
 
 
 
     const submitTodoHandler = (e) => {
         e.preventDefault();
         setTodos([
             ...todos,
             { text: inputText, date: inputDate, option: inputOption, id: Math.random() * 1000 },
         ]);
         setInputText("");
 
     };
 
     return (
         <form id="todo-from-input">
             <div >
                 <label htmlFor="todo-imput">Lägg till en todo: </label>
                 <input value={inputText} onChange={inputTextHandler} type="text" placeholder="" name="todo-imput" />
             </div>
             <input value={inputDate} onChange={dateHandler} type="date" placeholder="" />
 
             <select onClick={optionHandler} name="" id="todo-category-input-i">
                 <option value="Jobb1">Jobb</option>
                 <option value="Hushållsarbete">Hushållsarbete</option>
             </select>
 
             <button onClick={submitTodoHandler} type="submit"> Lägg till</button>
         </form>
     );
};

export default GetTodo;
