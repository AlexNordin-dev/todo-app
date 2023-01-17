import React from 'react';
const GetFilterTodo = ({ inputSearch, setSearch, setfilter }) => {

    const searchHandler = (e) => {
        //console.log(setSearch(e.target.value));
        setSearch(e.target.value);
    };

    const filterHandler = (e) => {
        //console.log(e.target.value);
        setfilter(e.target.value);
    };



    return (
        <>
            <h3>Filter på:</h3>
            <div>
                <label htmlFor="filter"></label>
                <input value={inputSearch} onChange={searchHandler} type="text" name="filter" placeholder="Söka" />
            </div>

            <form id="todo-filter-options-i">
                <div onChange={filterHandler}>
                    <input type="radio" value="Alla" name="options" defaultChecked className='radioAlla'/>Alla
                    <input type="radio" value="Jobb" name="options" className='radioJobb'/>Jobb
                    <input type="radio" value="Hushållsarbete" name="options" className='radioH'/>Hushållsarbete
                </div>
            </form>
        </>
    );
}
export default GetFilterTodo;

