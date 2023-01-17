import React, { useState, useEffect } from 'react';
import './App.css';


// Importing Components
import GetTodo from './components/GetTodo'
import ShowTodo from './components/ShowTodo'
import GetFilterTodo from './components/GetFilterTodo'
import {DefaulTodotList} from './components/DefaulTodotList'

//<<<<<<<<<<___Create Date___>>>>>>>>>>
let now = new Date();
let day = ("0" + now.getDate()).slice(-2);
let month = ("0" + (now.getMonth() + 1)).slice(-2);
let today = now.getFullYear() + "-" + (month) + "-" + (day);
//_____________End Create Date__________________




function App() {
  // State
  const [inputText, setInputText] = useState("");
  const [inputOption, setInputOption] = useState("jobb");
  const [inputDate, setInputDate] = useState(today);

  const [search, setSearch] = useState('');
  const [filter, setfilter] = useState('');


  const [todos, setTodos] = useState(() => {
    // getting stored value from local storage
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  //console.log(search);

  //Use effect
  useEffect(() => {
    getdate();

    //save data to local storage
    localStorage.setItem("name", JSON.stringify(todos));
  }, [todos, search]);


  //useEffect(() => { getdate(); });

  // Delete All Todos
  const deleteTodoHandler = () => {
    setTodos([]);
  }


  //____________________Finter and search functions_______________________
  const filterAndSearch= (data) => {
    console.log('Defaul Todot List: ', DefaulTodotList.map(DefaulTodotList =>DefaulTodotList))
    if (filter === 'Alla') {
      return data.filter((todo) =>
        todo.text.toLowerCase().includes(search.toLowerCase())
      );
    }
    else if (filter !== 'Alla') {
      return data.filter((todo) =>
        todo.text.toLowerCase().includes(search.toLowerCase()) &&
        todo.option.toLowerCase().includes(filter.toLowerCase()));
    }   
  };
  //console.log(filter);
   //____________________END Finter and search functions_______________________


  // If Todo's date is < Today then show red color.
  function getdate() {
    document.querySelectorAll('.todo-date-create').forEach(function (todo) {
      const todoDate = todo.textContent;
      //console.log(todoDate.length, today.length);

      if (todoDate < today) {
        todo.style.color = "red";
      }
      else {
        todo.style.color = "green";
      }
    })
  }



  return (
    <div className="todobox">
      <header>
        <div className='headerApp'> <h1> Todo List</h1></div>
      </header>

      <GetTodo
        inputText={inputText}
        todos={todos}
        inputOption={inputOption}
        inputDate={inputDate}

        setTodos={setTodos}
        setInputText={setInputText}
        setInputOption={setInputOption}
        setInputDate={setInputDate}
      />

      <GetFilterTodo
        search={search}
        setSearch={setSearch}
        filter={filter} setfilter={setfilter}
      />

      <div className='deleteAllTodo'>
        <button
          onClick={deleteTodoHandler}
          className="deleteAllTodoBtn">
          Radera alla
        </button>
      </div>

      <ShowTodo
        data={filterAndSearch(todos, DefaulTodotList)}
        setTodos={setTodos}
        todos={todos}
        />      

    </div>
  );
}


export default App;
