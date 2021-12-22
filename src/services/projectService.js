import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/projects/`

export const getAllProjects = async () => {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: "GET",
      headers: {
        'content-type': 'application/json',
        "Authorization": `Bearer ${tokenService.getToken()}`
      },
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const addProject = async (project) => {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(project)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const getProjectById = async (projectId) => {
  try{
    const res = await fetch(`${BASE_URL}${projectId}`, {
      method: "GET",
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

export const updateProject = async (projectId, formData) => {
  try {
    const res = await fetch(`${BASE_URL}${projectId}`, {
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

export const markComplete = async (projectId) => {
  try {
    const res = await fetch(`${BASE_URL}${projectId}/toggleActive`, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ` + tokenService.getToken()
      },
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const createTask = async (projectId, task) => {
  try {
    const res = await fetch(`${BASE_URL}${projectId}/tasks`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const setTaskStatus = async (projectId, taskId, stat) => {
  try {
    const res = await fetch(`${BASE_URL}${projectId}/tasks/${taskId}`, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ` + tokenService.getToken()
      },
      body: JSON.stringify({
        status: stat
      })
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const deleteTask = async (projectId, taskId) => {
  try {
    await fetch(`${BASE_URL}${projectId}/tasks/${taskId}`, {
      method: "DELETE",
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    })
  } catch (error) {
    throw error
  }
}

export const updateHours = async (projectId, hours) => {
  try {
    const res = await fetch(`${BASE_URL}${projectId}/addHours`, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ` + tokenService.getToken()
      },
      body: JSON.stringify({
        hoursWorked: hours
      })
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}