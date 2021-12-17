import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import ProjectForm from './ProjectForm'
// Services
import { addProject } from '../../services/projectService';

const CreateProject = (props) => {
  const navigate = useNavigate()
  const [project, setProject] = useState('')
  const [formData, setFormData] = useState({
    title: '',
    startDate: '',
    endDate: '',
    hourlyRate: 0,
  })
  const [validForm, setValidForm] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }

  const handleCreateProject = async (e) => {
    e.preventDefault()
    try {
      const newProject = await addProject(formData)
      navigate('/projects')
    } catch (error) {
      throw error
    }
  }

  return (
    <>
      <h1>Create Project</h1>
      <ProjectForm 
        project={project}
        setProject={setProject}
        handleCreateProject={handleCreateProject}
        handleChange={handleChange}
        validForm={validForm}
        setValidForm={setValidForm}
        formData={formData}
        setFormData={setFormData}
      />
    </>
  )
}

export default CreateProject