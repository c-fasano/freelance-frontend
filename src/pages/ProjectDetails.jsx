import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
// Styles
import './project-details.scss'
// Services
import * as projectService from '../services/projectService'
// Components
import ProjectCard from '../components/Project/ProjectCard';
import CardActions from '../components/Project/CardActions';
import TaskSection from '../components/Task/TaskSection'
import HoursSection from '../components/Hours/HoursSection';

const ProjectDetails = ({handleUpdateProjectsList}) => {
  const { id } = useParams()
  const [project, setProject] = useState()
  const [tasks, setTasks] = useState([])
  const [hours, setHours] = useState()

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projectData = await projectService.getProjectById(id)
        setProject(projectData)
        setTasks(projectData.taskList)
        setHours(projectData.hoursWorked)
      } catch (error) {
        throw error
      }
    }
    fetchProject()
  }, [id])

  const markProjectComplete = async (projectId) => {
    try {
      const updatedProject = await projectService.markComplete(projectId)
      setProject(updatedProject)
      handleUpdateProjectsList(updatedProject)
    } catch (error) {
      throw error
    }
  }

  return (
    <>
      <h1>Project Details</h1>
      {project &&
        <ProjectCard 
          project={project}
          key={project._id}
        />
      }
      {project &&
        <HoursSection 
          project={project}
          setProject={setProject}
          hours={hours}
          setHours={setHours}
          handleUpdateProjectsList={handleUpdateProjectsList}
        />
      }
      {project &&
        <CardActions 
          project={project}
          markProjectComplete={markProjectComplete}
        />
      }
      <TaskSection 
        project={project}
        setProject={setProject}
        tasks={tasks}
        setTasks={setTasks}
      />
    </>
  )
}

export default ProjectDetails