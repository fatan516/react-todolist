import { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
export default function Todos() {
  let [todos, settodos] = useState([
    { id: uuidv4(), name: "eating breakfast", status: false },
    { id: uuidv4(), name: "eating lunch", status: true },
    { id: uuidv4(), name: "eating dinner", status: false },
  ]);
  function addTodo() {
    if (event.target.value == "") {
    } else {
      if (event.key == "Enter") {
        let newTodo = { id: uuidv4(), name: event.target.value, status: false };
        settodos([...todos, newTodo]);
        event.target.value = "";
      }
    }
  }

  function statusHandler(todoId) {
    let updatedTodo = todos.map((item) => {
      if (item.id == todoId) {
        item.status = !item.status;
        return item;
      }
      return item;
    });
    settodos(updatedTodo);
  }
  function removeHandler(todoId) {
    let updatedTodos2 = todos.filter((item) => {
      return item.id != todoId;
    });
    settodos(updatedTodos2);
  }
  function changeHandler(todoId, newName) {
    let updatedTodos3 = todos.map((item) => {
      if (item.id == todoId) {
        item.name = newName;
        return item;
      }
      return item;
    });
    settodos(updatedTodos3);
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
        <div className="flex items-center mb-6">
          <h1 className="mr-6 text-4xl font-bold text-purple-600">
            {" "}
            TO DO APP
          </h1>
        </div>
        <div className="relative">
          <input
            type="text"
            onKeyDown={addTodo}
            placeholder="What needs to be done today?"
            className="w-full px-2 py-3 border rounded outline-none border-grey-600"
          />
        </div>
        <TodoList
          todos={todos}
          statusHandler={statusHandler}
          removeHandler={removeHandler}
          changeHandler={changeHandler}
        />
      </div>
    </div>
  );
}
