import React, { useState } from 'react';
import { Plus, Edit, Trash2, Save, X, Menu } from 'lucide-react';

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const [editingTask, setEditingTask] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleAddTask = () => {
    if (newTask.title.trim()) {
      setTasks([...tasks, { 
        id: Date.now(), 
        ...newTask, 
        createdAt: new Date().toLocaleString() 
      }]);
      setNewTask({ title: '', description: '' });
    }
  };


  const handleEditTask = (task) => {
    setEditingTask(task);
  };


  const handleUpdateTask = () => {
    setTasks(tasks.map(task => 
      task.id === editingTask.id ? { ...editingTask } : task
    ));
    setEditingTask(null);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Task Management</h1>
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      <div className={`
        mb-6 
        ${isMobileMenuOpen ? 'block' : 'hidden'} 
       
        space-y-4 md:space-y-0 md:flex md:space-x-4
      `}>
        <div className="flex-grow mb-2 md:mb-0">
          <input 
            type="text" 
            placeholder="Task Title" 
            value={newTask.title}
            onChange={(e) => setNewTask({...newTask, title: e.target.value})}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex-grow mb-2 md:mb-0">
          <input 
            type="text" 
            placeholder="Task Description" 
            value={newTask.description}
            onChange={(e) => setNewTask({...newTask, description: e.target.value})}
            className="w-full p-2 border rounded"
          />
        </div>
        <button 
          onClick={handleAddTask}
          className="w-full md:w-auto bg-blue-500 text-white p-2 rounded flex items-center justify-center"
        >
          <Plus size={20} className="mr-2" /> Add Task
        </button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left hidden md:table-cell">Title</th>
              <th className="p-3 text-left hidden md:table-cell">Description</th>
              <th className="p-3 text-left hidden md:table-cell">Created At</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr 
                key={task.id} 
                className="border-b hover:bg-gray-50 block md:table-row flex-col"
              >
                {editingTask && editingTask.id === task.id ? (

                  <>
                    <td colSpan={4} className="block md:table-cell p-3">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input 
                          value={editingTask.title}
                          placeholder="Title"
                          onChange={(e) => setEditingTask({...editingTask, title: e.target.value})}
                          className="w-full p-2 border rounded"
                        />
                        <input 
                          value={editingTask.description}
                          placeholder="Description"
                          onChange={(e) => setEditingTask({...editingTask, description: e.target.value})}
                          className="w-full p-2 border rounded"
                        />
                        <div className="flex space-x-2 justify-center">
                          <button 
                            onClick={handleUpdateTask}
                            className="text-green-500 hover:bg-green-100 p-2 rounded"
                          >
                            <Save size={20} />
                          </button>
                          <button 
                            onClick={() => setEditingTask(null)}
                            className="text-red-500 hover:bg-red-100 p-2 rounded"
                          >
                            <X size={20} />
                          </button>
                        </div>
                      </div>
                    </td>
                  </>
                ) : (
       
                  <>
                    <td className="p-3 block md:table-cell">
                      <span className="md:hidden font-bold mr-2">Title:</span>
                      {task.title}
                    </td>
                    <td className="p-3 block md:table-cell  ">
                      {task.description}
                    </td>
                    <td className="p-3 block md:table-cell  ">
                      {task.createdAt}
                    </td>
                    <td className="p-3 flex justify-center space-x-2">
                      <button 
                        onClick={() => handleEditTask(task)}
                        className="text-blue-500 hover:bg-blue-100 p-2 rounded"
                      >
                        <Edit size={20} />
                      </button>
                      <button 
                        onClick={() => handleDeleteTask(task.id)}
                        className="text-red-500 hover:bg-red-100 p-2 rounded"
                      >
                        <Trash2 size={20} />
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        {tasks.length === 0 && (
          <div className="text-center p-6 text-gray-500">
            No tasks available. Add a new task to get started!
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskManagement;