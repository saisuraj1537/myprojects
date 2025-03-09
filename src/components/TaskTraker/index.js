import {useState} from 'react'
import {FaTrash} from 'react-icons/fa'
import {FiCheckCircle} from 'react-icons/fi'
import './styles.css' // Import styles

const TaskTracker = () => {
  const [tasks, setTasks] = useState([])
  const [taskInput, setTaskInput] = useState('')

  // Add Task
  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, {id: Date.now(), text: taskInput, completed: false}])
      setTaskInput('')
    }
  }

  // Delete Task
  const deleteTask = id => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  // Toggle Task Completion
  const toggleComplete = id => {
    setTasks(
      tasks.map(t => (t.id === id ? {...t, completed: !t.completed} : t)),
    )
  }

  return (
    <div className="container">
      <div className="task-tracker">
        <h1 className="title">Task Tracker</h1>

        {/* Input Field */}
        <div className="task-input">
          <input
            type="text"
            value={taskInput}
            onChange={e => setTaskInput(e.target.value)}
            placeholder="Add a new task..."
          />
          <button onClick={addTask} type="button">
            Add Task
          </button>
        </div>

        {/* Task List */}
        <ul className="task-list">
          {tasks.map(task => (
            <li key={task.id} className="task-item">
              <div
                onClick={() => toggleComplete(task.id)}
                role="button"
                tabIndex="0"
                className={`task-text ${task.completed ? 'completed' : ''}`}
              >
                <FiCheckCircle
                  className={`icon ${task.completed ? 'checked' : ''}`}
                />
                <span>{task.text}</span>
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className="delete-btn"
                type="button"
              >
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TaskTracker
