import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// Components
import UpdateForm from './UpdateForm'
// Services
import { updateProject, getProjectById } from '../../services/projectService';

const UpdateProject = (props) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [formData, setFormData] = useState()
  const [validForm, setValidForm] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }

  const handleUpdateProject = async (e) => {
    e.preventDefault()
    try {
      const updatedProject = await updateProject(id, formData)
      props.handleUpdateProjectsList(updatedProject)
      navigate(`/projects`)
      } catch (error) {
        throw error
      }
  }

  useEffect(() => {
    const fetchProject = async () => {
      const projData = await getProjectById(id)
      setFormData(projData)
    }
    fetchProject()
  }, [id])

  return (
    <UpdateForm 
      handleChange={handleChange}
      handleUpdateProject={handleUpdateProject}
      validForm={validForm}
      setValidForm={setValidForm}
      formData={formData}
      setFormData={setFormData}
      clients={props.clients}
    />
  )
}

export default UpdateProject