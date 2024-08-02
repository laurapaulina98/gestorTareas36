// lista de tareas 
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// funcion para llevar las tareas 
export const getTasks = () => tasks;

// la funcion para agregar una tarea 
 export const addTask = (task) => {
    const newTask = {
     id: Date.now(),
     text: task,
     completed: false, 
    };
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
 };