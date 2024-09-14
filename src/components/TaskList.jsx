import React from 'react';

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <div className="flex flex-col gap-4">
      {tasks.map((task, index) => (
        <div key={index} className="flex justify-between items-center bg-zinc-200 p-4 rounded-md">
          <div>
            <h4 className={`text-lg ${task.completed ? 'line-through' : ''}`}>
              {task.task} (Day: {task.day})
            </h4>
          </div>
          <div className="flex items-center gap-4">
            <label>
              <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={() => toggleTask(index)} 
              />
              {task.completed ? ' Done' : ' In Progress'}
            </label>
            <button 
              className="bg-red-500 text-white px-4 py-2 rounded-md"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
