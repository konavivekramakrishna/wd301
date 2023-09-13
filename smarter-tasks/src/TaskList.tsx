// TaskList.tsx
import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface TaskListProps {
  tasks: TaskItem[];
  deleteTask: (idx: number) => void;
}

const TaskList: React.FC<TaskListProps> = (props) => {
  return (
    <ul>
      {props.tasks.map((task: TaskItem, idx: number) => (
        <li key={task.id}>
          <Task item={task} removeTask={() => props.deleteTask(idx)} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
