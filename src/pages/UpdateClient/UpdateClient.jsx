import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// Components
import UpdateForm from './UpdateForm'
// Services
import { updateClient, getClientById } from '../../services/clientService'

const UpdateClient = (props) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [formData, setFormData] = useState()
  const [validForm, setValidForm] = useState(false)

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleUpdateClient = async (e) => {
    e.preventDefault()
    try {
      const updatedClient = await updateClient(id, formData)
      props.handleUpdateClientsList(updatedClient)
      navigate(`/clients`)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    const fetchClient = async () => {
      const clientData = await getClientById(id)
      setFormData(clientData)
    }
    fetchClient()
  }, [id])

  return (
    <UpdateForm 
      handleChange={handleChange}
      handleUpdateClient={handleUpdateClient}
      validForm={validForm}
      setValidForm={setValidForm}
      formData={formData}
      setFormData={setFormData}
    />
  )
}

export default UpdateClient