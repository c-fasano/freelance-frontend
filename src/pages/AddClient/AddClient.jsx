import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
// Components
import ClientForm from './ClientForm'
// Services
import { addClient } from '../../services/clientService';

const AddClient = (props) => {
  const navigate = useNavigate()
  const [client, setClient] = useState()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })
  const [validForm, setValidForm] = useState(false)
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }

  const handleCreateClient = async (e) => {
    e.preventDefault()
    try {
      const newClient = await addClient(formData)
      props.setClients([...props.clients, newClient])
      navigate('/clients')
    } catch (error) {
      throw error
    }
  }

  return (
    <>
      <h1>Add Client</h1>
      <ClientForm 
        client={client}
        setClient={setClient}
        handleCreateClient={handleCreateClient}
        handleChange={handleChange}
        validForm={validForm}
        setValidForm={setValidForm}
        formData={formData}
        setFormData={setFormData}
      />
    </>
  )
}

export default AddClient