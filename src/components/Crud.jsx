import { useState } from "react";

const Crud = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleChage = (e) => {
    setInput(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        value: input,
      },
    ]);
    setInput("");
    console.log(todos);
  };

  const deleteTask = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <>
      <div
        className="flex flex-col min-w-[18rem] max-w-[30rem] 
            min-h-[10rem]
            border-x-3 shadow-xl shadow-white border-y-3 rounded-xl justify-around gap-x-8 items-center text-center bg-grey-300 m-auto "
      >
        <form>
          <h2 className="  font-mono from-neutral-800 tracking-wide p-4">
            What is your today plan ?
          </h2>
          <input
            type="text"
            className="outline-none  h-[2rem] min-w-30 max-w-40 rounded bg-gray-200 hover:bg-gray-100 text-blue-950 text-center"
            value={input}
            onChange={handleChage}
          />
          <input
            type="button"
            value="ADD"
            className="w-[4rem] h-8 rounded bg-violet-500 m-1"
            onClick={addTask}
          />
        </form>
      </div>
      <div className="flex flex-col  p-4 mt-2 m-auto text-center items-center font-sans  text-white uppercase rounded ">
        {todos.map((todo) => {
          return (
            <ul key={todo.id} className="w-[12rem] h-[3rem] bg-blue-400 ">
              <li>
                {todo.value}
                <button
                  className="w-[4rem] h-8 rounded bg-red-500 uppercase m-1"
                  onClick={() => deleteTask(todo.id)}
                >
                  delete
                </button>
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default Crud;
