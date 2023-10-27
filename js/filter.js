import{todos}from"./todo.js";import{renderTask}from"./task.js";const Filter={ALL:"all",ACTIVE:"active",COMPLETED:"completed"},filters=document.querySelector(".filters");let activeFilter=document.querySelector(".filters__link--active");const ACTIVE_CLASS="filters__link--active",filterActive=e=>!e.completed,filterCompleted=e=>e.completed,getFilteredItems=e=>{switch(e){case Filter.ACTIVE:return[...todos].filter(filterActive);case Filter.COMPLETED:return[...todos].filter(filterCompleted);case Filter.ALL:return[...todos]}},toggleFilter=e=>{activeFilter.classList.remove(ACTIVE_CLASS),activeFilter=document.querySelector(`#${e}`),activeFilter.classList.add(ACTIVE_CLASS)},initFilters=()=>{const e=localStorage.getItem("filter")??"all";toggleFilter(e);const t=getFilteredItems(e);renderTask(t),filters.addEventListener("click",(e=>{if(!e.target.classList.contains("filters__link"))return;const t=e.target.id;toggleFilter(t),localStorage.setItem("filter",t);const r=getFilteredItems(t);renderTask(r)}))};export{initFilters};