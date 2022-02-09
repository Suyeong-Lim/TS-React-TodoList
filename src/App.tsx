import React, { FC, ChangeEvent, useState } from "react";
import "App.css";
import { ITask } from "interface";
import TodoTask from "Components/TodoTask";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadLine, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]); //타입을 꼭 안정해줘도 됨 -> interface 로 정해줌

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    }
    if (e.target.name === "deadLine") {
      setDeadline(Number(e.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadLine: deadLine };
    setTodoList([...todoList, newTask]); //⭐️ interface 정해줘야함
    setTask("");
    setDeadline(0);
    console.log(todoList);
  };

  //삭제기능을 파생상태로 만들기 vs setState 값 바꾸기 머가 더 조을까?
  const completedTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            name="task"
            value={task}
            placeholder="Todo"
            onChange={handleChange}
          />
          <input
            type="number"
            name="deadLine"
            value={deadLine}
            onChange={handleChange}
            placeholder="DeadLine (in Days)..."
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => (
          <TodoTask key={key} task={task} completedTask={completedTask} />
        ))}
      </div>
    </div>
  );
};

export default App;
