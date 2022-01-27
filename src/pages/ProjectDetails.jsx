import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
// Styles
import './project-details.scss'
// Services
import * as projectService from '../services/projectService'
// Components
import ProjectCard from '../components/Project/ProjectCard';
import CardActions from '../components/Project/CardActions';
import TaskSection from '../components/Task/TaskSection'
import HoursSection from '../components/Hours/HoursSection';

const ProjectDetails = () => {
  const { id } = useParams()
  const [project, setProject] = useState()
  const [tasks, setTasks] = useState([])
  const [hours, setHours] = useState()

  const linkStyle = {
    width: "10vw",
    height: "10vh",
    border: " 3px solid rgba(53, 53, 53, 0.5",
    color: "rgba(60, 110, 113, 1",
    position: "absolute",
    top: "0",
    left: "0",
    fontSize: "2vw",
    display: "flex",
    alignItems: "center"
  }

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
    } catch (error) {
      throw error
    }
  }
  
  return (
    <div className="project-details">
      <Link 
      to="/profile"
      style={linkStyle}
      div className="return">Return To Profile
    </Link>
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
    </div>
  )
}

export default ProjectDetails