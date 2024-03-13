import { useState } from "react";

const Forms = () => {

  const styles = {
    centerContent:{
      margin : "0 auto" 
    }
  }
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
    <div className="min-h-screen bg-blue-300 flex flex-col gap-8">
      <div className="h-20 flex text-2xl md:text-3xl justify-center items-center">
        <h1>TODOLIST</h1>
      </div>
      {/* forms */}
      <section className="w-full max-w-max text-center " style={styles.centerContent}>
        <h2 className="font-mono p-2 text-lg md:text-xl">What is your today plan ?</h2>
        <form className="shadow bg-white p-2 rounded-md">
          <input
            type="text"
            className="bg-inherit outline-none p-1 text-center hover:outline-none "
            name="task"
            value={input}
            onChange={handleChage}
          />
          <input
            type="button"
            value="ADD"
            onClick={addTask}
            className="border-none rounded-md bg-violet-400 px-5 py-1 "
          />
        </form>
      </section>

      {todos.map((todo) => {
        return (
          <section className="w-full max-w-max text-center shadow bg-white px-4 py-2 rounded-lg" style={styles.centerContent}>
            <ul key={todo.id}>
              <li>
                {todo.value}
                <button onClick={() => deleteTask(todo.id)} className="px-1 size-3"><ion-icon name="trash-outline"></ion-icon></button>
              </li>
            </ul>
          </section>
        );
      })}
      </div>
      </>
  );
};

export default Forms;

