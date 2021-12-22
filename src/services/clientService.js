import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/clients/`

export const getAllClients = async () => {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: 'GET', 
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const addClient = async (client) => {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(client)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const getClientById = async (clientId) => {
  try {
    const res = await fetch(`${BASE_URL}${clientId}`, {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${tokenService.getToken()}`
      },
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const updateClient = async (clientId, formData) => {
  try {
    const res = await fetch(`${BASE_URL}${clientId}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
      },
      body: JSON.stringify(formData)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const deleteClient = async (clientId) => {
  try {
    const res = await fetch(`${BASE_URL}${clientId}`, {
      method: 'DELETE', 
      headers: {
        'Authorization': `Bearer ` + tokenService.getToken()
      }
    })
  } catch (error) {
    throw error
  }
}