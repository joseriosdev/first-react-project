import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './cmps/Header'
import Tasks from './cmps/Tasks'
import AddTask from './cmps/AddTask'
import Footer from './cmps/Footer'
import About from './cmps/About'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  // Fetch Data
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5005/tasks')
    const data = await res.json()
    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch('http://localhost:5005/tasks/'+id)
    const data = await res.json()
    return data
  }

  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5005/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    setTasks([...tasks, data])

  //   console.log(task)
  //   const id = Math.floor( Math.random()*10000 + 1 )
  //   const newTask = {id: id, ...task}
  //   setTasks([...tasks, newTask])
  }

  // Delete Tasks
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5005/tasks/${id}`, { method: 'DELETE' })
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
    console.log(updTask)
    const res = await fetch(`http://localhost:5005/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })
    const data = await res.json()
    console.log(data)
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: data.reminder} : task))
  }

  return (
    <Router>
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      <Routes>
      <Route path='/' element={
      <>
          {showAddTask && <AddTask onAdd={addTask} />}
          {
            tasks.length > 0 ?
              <Tasks tasks={tasks}
              onDelete={deleteTask}
              onToggle={toggleReminder} /> 
            :
              'No Tasks To Show'
          }
        </>} />
      <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  )
}

export default App;
