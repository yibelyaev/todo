import{init,todos}from"./todo.js";import{renderTask}from"./task.js";import{initFilters}from"./filter.js";import{getCount}from"./counter.js";import{toggleTheme}from"./theme.js";init(),localStorage.getItem("todos")&&todos.forEach((t=>{renderTask(t)})),document.addEventListener("DOMContentLoaded",(()=>{initFilters(),getCount(todos),toggleTheme()}));