import { useState } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo/AddTodo";
import EditModal from "./Components/EditModal/EditModal";
import TodoList from "./Components/TodoList/TodoList";

function App() {
  let [todos, setTodos] = useState([
    { id: 1, task: "Apple", status: false },
    { id: 2, task: "Rice", status: false },
    { id: 3, task: "Sugar", status: false },
  ]);
  let [modal, setModal] = useState(false);
  let [editTodo, setEditTodo] = useState({});

  function handleTask(newObj) {
    let newTodos = [...todos];

    newTodos.push(newObj);
    setTodos(newTodos);
  }

  function changeStatus(id) {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });

    setTodos(newTodos);
  }

  function handleDelete(id) {
    // console.log(id);
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    // console.log(newTodos);
    setTodos(newTodos);
  }

  function handleEdit(index) {
    // console.log(index);
    setModal(true);
    setEditTodo(todos[index]);
  }

  function handleSaveTask(newTask) {
    const newTodos = todos.map((item) => {
      if (item.id === newTask.id) {
        return newTask;
      }
      return item;
    });

    setTodos(newTodos);
    handleCloseModal();
  }

  function handleCloseModal() {
    setModal(false);
  }

  return (
    <div className="App">
      <AddTodo handleTask={handleTask} />
      <TodoList
        todos={todos}
        changeStatus={changeStatus}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      {modal ? (
        <EditModal
          editTodo={editTodo}
          handleSaveTask={handleSaveTask}
          handleCloseModal={handleCloseModal}
        />
      ) : null}
    </div>
  );
}

export default App;
