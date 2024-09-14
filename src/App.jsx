import React, { useState } from 'react';
import Navbar from './components/Navbar';
import DayCard from './components/DayCard';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function App() {
  const [tasks, setTasks] = useState({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  });

  const [newTask, setNewTask] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");

 
  const addTaskToDay = () => {
    if (newTask && newDescription && taskDate) {
      const date = new Date(taskDate);
      const dayOfWeek = daysOfWeek[date.getDay()]; 

      setTasks((prev) => ({
        ...prev,
        [dayOfWeek]: [...prev[dayOfWeek], { task: newTask, description: newDescription, completed: false }],
      }));

      setNewTask("");
      setNewDescription("");
      setTaskDate("");
    }
  };

  // Toggle task completion
  const toggleTask = (day, taskIndex) => {
    const updatedTasks = tasks[day].map((task, index) => {
      if (index === taskIndex) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks((prev) => ({ ...prev, [day]: updatedTasks }));
  };

  // Delete a task
  const deleteTask = (day, taskIndex) => {
    const updatedTasks = tasks[day].filter((_, index) => index !== taskIndex);
    setTasks((prev) => ({ ...prev, [day]: updatedTasks }));
  };

  return (
    <div className="w-full bg-gray-900 min-h-screen text-gray-300">
      <Navbar tasks={tasks} />
      <div className="px-10 py-5">
        <div className="mb-5 flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Task Title"
            className="border p-2 flex-1 bg-gray-800 text-white placeholder-gray-400"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <input
            type="text"
            placeholder="Task Description"
            className="border p-2 flex-1 bg-gray-800 text-white placeholder-gray-400"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <input
            type="date"
            className="border p-2 bg-gray-800 text-white"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
          />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400 transition"
            onClick={addTaskToDay}
          >
            Add Task
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {daysOfWeek.map((day) => (
            <DayCard
              key={day}
              day={day}
              tasks={tasks[day]}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
