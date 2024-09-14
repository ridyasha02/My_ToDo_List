import React from 'react';

function DayCard({ day, tasks, toggleTask, deleteTask }) {
  return (
    <div className="bg-gray-800 p-4 rounded-md shadow-md">
      <h3 className="text-xl font-bold mb-4 text-gray-100">{day}</h3>

      <div>
        {tasks.length > 0 ? tasks.map((task, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-700 p-2 rounded-md mb-2"
          >
            <div className="flex-1">
              <div className={`text-lg ${task.completed ? 'line-through text-gray-400' : 'text-white'}`}>
                {task.task}
              </div>
              <div className={`text-sm ${task.completed ? 'line-through text-gray-500' : 'text-gray-400'}`}>
                {task.description}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <label>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(day, index)}
                />
                <span className="ml-2 text-gray-300">{task.completed ? 'Done' : 'In Progress'}</span>
              </label>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-400 transition"
                onClick={() => deleteTask(day, index)}
              >
                Delete
              </button>
            </div>
          </div>
        )) : <p className="text-gray-500">No tasks for this day</p>}
      </div>
    </div>
  );
}

export default DayCard;
