import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Body() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("All");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const clearCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };

  const getFilteredTodos = () => {
    switch (filter) {
      case "Active":
        return todos.filter((todo) => !todo.completed);
      case "Completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div className="flex items-center justify-center flex-col gap-5 w-full -mt-28">
      <div className="flex items-center gap-3 w-11/12 h-14 rounded-md py-3 px-5 bg-lightMode-VeryLightGray dark:bg-darkMode-VeryDarkBlue md:w-7/12">
        <input
          className="form-checkbox bg-lightMode-VeryDarkGray dark:bg-darkMode-VeryDarkBlue rounded-full focus:ring-0"
          type="checkbox"
        />
        <input
          className="form-input text-lightMode-VeryGrayishBlue dark:text-darkMode-LightGrayishBlue placeholder:text-base placeholder:text-lightMode-DarkGrayishBlue placeholder:dark:text-darkMode-VeryDarkGrayishBlue bg-lightMode-VeryLightGray dark:bg-darkMode-VeryDarkBlue focus:outline-transparent"
          type="text"
          placeholder="Create a new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
        />
      </div>
      {getFilteredTodos().map((todo, index) => (
        <div
          key={index}
          className={`flex items-center justify-between w-11/12 h-14 rounded-md py-3 px-5 border-b ${
            todo.completed
              ? "bg-lightMode-LightGray"
              : "bg-lightMode-VeryLightGray"
          } dark:bg-darkMode-VeryDarkBlue md:w-7/12`}
        >
          <div className="flex items-center gap-3">
            <input
            className="form-checkbox rounded-full focus:ring-0"
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
            />
            <p
              className={`text-base ${
                todo.completed ? "line-through" : ""
              } text-lightMode-DarkGrayishBlue dark:text-darkMode-DarkGrayishBlue`}
            >
              {todo.text}
            </p>
          </div>
          <div>
            <button
              className="dark:text-lightMode-DarkGrayishBlue"
              onClick={() => deleteTodo(index)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-between gap-3 w-11/12 h-14 rounded-md py-3 px-5 bg-lightMode-VeryLightGray dark:bg-darkMode-VeryDarkBlue md:w-7/12">
        <p className="text-base text-lightMode-DarkGrayishBlue dark:text-darkMode-DarkGrayishBlue">
          {todos.length} item{todos.length !== 1 ? "s" : ""} left
        </p>
        <p
          className="text-base text-lightMode-DarkGrayishBlue dark:text-darkMode-DarkGrayishBlue"
          onClick={clearCompleted}
        >
          Clear Completed
        </p>
      </div>
      <div className="flex items-center justify-center gap-8 w-11/12 h-14 text-base rounded-md py-3 px-5 shadow-xl border-b bg-lightMode-VeryLightGray dark:bg-darkMode-VeryDarkBlue md:w-7/12 md:shadow-none md:-mt-5">
        <p
          className={`font-bold cursor-pointer ${
            filter === "All"
              ? "text-primary-BrightBlue"
              : "text-lightMode-DarkGrayishBlue dark:text-darkMode-DarkGrayishBlue"
          }`}
          onClick={() => setFilter("All")}
        >
          All
        </p>
        <p
          className={`font-bold cursor-pointer ${
            filter === "Active"
              ? "text-primary-BrightBlue"
              : "text-lightMode-DarkGrayishBlue dark:text-darkMode-DarkGrayishBlue"
          }`}
          onClick={() => setFilter("Active")}
        >
          Active
        </p>
        <p
          className={`font-bold cursor-pointer ${
            filter === "Completed"
              ? "text-primary-BrightBlue"
              : "text-lightMode-DarkGrayishBlue dark:text-darkMode-DarkGrayishBlue"
          }`}
          onClick={() => setFilter("Completed")}
        >
          Completed
        </p>
      </div>
    </div>
  );
}

/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Body() {
  return (
    <div className="flex items-center justify-center flex-col gap-5 w-full -mt-28">
      <div className="flex items-center gap-3 w-11/12 h-14 rounded-md py-3 px-5 bg-lightMode-VeryLightGray dark:bg-darkMode-VeryDarkBlue md:w-7/12">
        <input className="" type="checkbox" />
        <input
          className="text-lightMode-VeryGrayishBlue dark:text-darkMode-LightGrayishBlue placeholder:text-base placeholder:text-lightMode-DarkGrayishBlue placeholder:dark:text-darkMode-VeryDarkGrayishBlue bg-lightMode-VeryLightGray dark:bg-darkMode-VeryDarkBlue outline-none"
          type="text"
          placeholder="Create a new todo..."
        />
      </div>
      <div className="flex items-center justify-center flex-col w-full shadow-2xl md:shadow-none">
        <div className="flex items-center justify-between w-11/12 h-14 rounded-md py-3 px-5 border-b bg-lightMode-VeryLightGray dark:bg-darkMode-VeryDarkBlue md:w-7/12">
          <div className="flex items-center gap-3">
            <input className="" type="checkbox" />
            <p className="text-lightMode-VeryDarkGrayishBlue dark:text-darkMode-DarkGrayishBlue text-base dark:textbase">
              My todos are done
            </p>
          </div>
          <div>
            <button className="dark:text-lightMode-DarkGrayishBlue">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 w-11/12 h-14 rounded-md py-3 px-5 bg-lightMode-VeryLightGray dark:bg-darkMode-VeryDarkBlue md:w-7/12">
          <p className="text-base text-lightMode-DarkGrayishBlue dark:text-darkMode-DarkGrayishBlue">
            1 items left
          </p>
          <p className="text-base text-lightMode-DarkGrayishBlue dark:text-darkMode-DarkGrayishBlue">
            Clear Completed
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8 w-11/12 h-14 text-base rounded-md py-3 px-5 shadow-xl border-b bg-lightMode-VeryLightGray dark:bg-darkMode-VeryDarkBlue md:w-7/12 md:shadow-none md:-mt-5">
        <p className="font-bold text-lightMode-DarkGrayishBlue dark:text-darkMode-DarkGrayishBlue">
          All
        </p>
        <p className="font-bold text-lightMode-DarkGrayishBlue dark:text-darkMode-DarkGrayishBlue">
          Active
        </p>
        <p className="font-bold text-lightMode-DarkGrayishBlue dark:text-darkMode-DarkGrayishBlue">
          Completed
        </p>
      </div>
    </div>
  );
}*/
