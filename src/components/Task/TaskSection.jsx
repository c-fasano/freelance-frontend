import React, { useState } from 'react';
// Components
import TaskList from './TaskList';
import CreateTask from './CreateTask'
// Services
import * as projectService from '../../services/projectService'

const TaskSection = ({project, setProject, tasks, setTasks}) => {
  const [toggleNew, setToggleNew] = useState(false)
  
  const handleCreateTask = async (formData) => {
    try {
      const newTask = await projectService.createTask(project._id, formData)
      setTasks([...tasks, newTask])
    } catch (error) {
      throw error
    }
  }

  const handleDeleteTask = async (taskId) => {
    try {
      await projectService.deleteTask(project._id, taskId)
      setTasks(tasks.filter(task => task._id !== taskId))
    } catch (error) {
      throw error
    }
  }

  const handleSetStatus = async (taskId, stat) => {
    try {
      const updatedTask = await projectService.setTaskStatus(project._id, taskId, stat)
      const updatedTaskList = tasks.map((task) => (
        task._id === taskId ? updatedTask : task
      ))
      setTasks(updatedTaskList)
    } catch (error) {
      throw error
    }
  }
  

  return (
    <>
      <h1>Tasks</h1>
      <button onClick={() => setToggleNew(!toggleNew)}>Add New Task</button>
      {toggleNew && 
        <CreateTask 
        project={project}
        tasks={tasks}
        setTasks={setTasks}
        handleCreateTask={handleCreateTask}
        setToggleNew={setToggleNew}
        />
      }
      {tasks && 
        <TaskList 
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
        handleSetStatus={handleSetStatus}
        />
      }
    </>
  )
}

export default TaskSection