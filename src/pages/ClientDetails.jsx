import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
// Services
import * as clientService from '../services/clientService'
// Components
import ClientCard from '../components/Client_components/ClientCard'
import ClientActions from '../components/Client_components/ClientActions';

const ClientDetails = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [client, setClient] = useState()

  const handleDeleteClient = async (clientId) => {
    try {
      await clientService.deleteClient(clientId)
      props.setClients(props.clients.filter(client => client._id !== clientId))
      navigate('/clients')
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const clientData = await clientService.getClientById(id)
        setClient(clientData)
      } catch (error) {
        throw error
      }
    }
    fetchClient()
  }, [id])
  
  return (
    <>
      <h1>Client Details</h1>
      {client &&
        <ClientCard 
          client={client}
          key={client._id}
        />
      }
      {client &&
        <ClientActions 
          client={client}
          handleDeleteClient={handleDeleteClient}
        />
      }
    </>
  )
}

export default ClientDetails