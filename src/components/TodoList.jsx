import TodoListItem from "./TodoListItem";

export default function TodoList({ todos, statusHandler, removeHandler,changeHandler }) {
  return (
    <ul className="list-reset">
      {todos.map((todo, index) => (
        <TodoListItem
          key={index}
          todo={todo}
          statusHandler={statusHandler}
          removeHandler={removeHandler}
          changeHandler={changeHandler}
        />
      ))}
    </ul>
  );
}
