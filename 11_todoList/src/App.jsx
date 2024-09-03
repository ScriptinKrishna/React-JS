import React, { useState, useEffect } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todoItems");
    if (storedTodos) {
      try {
        setTodos(JSON.parse(storedTodos));
      } catch (e) {
        console.error("Failed to parse stored todos", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (todo.trim()) {
      setTodos((prevTodos) => {
        const newTodos = [...prevTodos, { todo, isCompleted: false }];
        return newTodos;
      });
      setTodo("");
    }
  };

  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };

  const handleEdit = (index) => {
    setIsEditing(true);
    setCurrentIndex(index);
    setTodo(todos[index].todo);
  };

  const handleUpdate = () => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((item, index) =>
        index === currentIndex ? { ...item, todo } : item
      );
      return updatedTodos;
    });
    setIsEditing(false);
    setCurrentIndex(null);
    setTodo("");
  };

  const handleDelete = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  const handleComplete = (index) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((item, i) =>
        i === index ? { ...item, isCompleted: !item.isCompleted } : item
      );
      return updatedTodos;
    });
  };

  return (
    <div className="container mx-auto my-5 bg-gray-100 rounded-xl p-5 w-3/4 shadow-md">
      <h1 className="text-3xl font-bold text-center mb-5">Todo List</h1>
      <div className="flex justify-center mb-5">
        <input
          value={todo}
          onChange={handleOnChange}
          type="text"
          className="p-2 border border-gray-300 rounded w-80"
          placeholder="Enter your todo"
        />
        <button
          onClick={isEditing ? handleUpdate : handleAdd}
          className="bg-blue-600 text-white px-4 py-2 ml-2 rounded"
        >
          {isEditing ? "Update" : "Add"}
        </button>
      </div>
      <h2 className="text-xl font-semibold mb-3">Your Todo List:</h2>
      <div className="space-y-3">
        {todos.map((item, index) => (
          <div key={index} className="flex justify-between items-center bg-white p-3 rounded shadow">
            <div
              className={`flex-1 text-lg ${item.isCompleted ? "line-through text-gray-500" : "text-gray-800"}`}
            >
              {item.todo}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(index)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
              <button
                onClick={() => handleComplete(index)}
                className={`px-3 py-1 rounded ${item.isCompleted ? "bg-gray-500 text-white" : "bg-green-500 text-white"}`}
              >
                {item.isCompleted ? "Undo" : "Complete"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;