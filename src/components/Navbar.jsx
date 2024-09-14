import React from 'react';

function Navbar({ tasks }) {
  const allTasks = Object.values(tasks).flat();
  const inProgressCount = allTasks.filter(task => !task.completed).length;
  const completedCount = allTasks.filter(task => task.completed).length;

  return (
    <div className="bg-gray-800 w-full px-4 py-3 flex justify-between items-center">
      <div className="w-1/3"></div>
      <h3 className="text-2xl font-bold text-center text-white w-1/3">My ToDo List</h3>
      <div className="flex gap-4 text-white w-1/3 justify-end">
        <div className="bg-blue-700 p-2 rounded-md">
          <h3>In Progress: {inProgressCount}</h3>
        </div>
        <div className="bg-green-600 p-2 rounded-md">
          <h3>Completed: {completedCount}</h3>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
