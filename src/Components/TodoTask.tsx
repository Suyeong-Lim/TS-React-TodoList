import React from "react";
import { ITask } from "interface";

interface Props {
  task: ITask;
  completedTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completedTask }: Props) => {
  return (
    <div>
      <div className="task">
        <div className="content">
          <span>{task?.taskName}</span>
          <span>{task?.deadLine}</span>
          <button
            onClick={() => {
              completedTask(task.taskName);
            }}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoTask;
