import React from 'react';
import { Link } from 'react-router-dom'
// Components
import ClientCard from '../components/Client_components/ClientCard'

const ClientList = ({user, clients}) => {
  return (
    <>
      <h1>Clients</h1>
      {clients?.map((client) => (
        <Link key={client._id} to={`/clients/${client._id}`} >
          <ClientCard
            client={client}
          />
        </Link>
      ))}
    </>
  )
}

export default ClientList