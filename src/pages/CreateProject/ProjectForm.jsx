import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

import './projectForm.scss'
import '../../sassStyles/_variables.scss'

const ProjectForm = ({ handleCreateProject, handleChange, validForm, setValidForm, formData}) => {
  const formElement = useRef()
  const clients = useSelector((state) => state.allClients.clients)
  
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
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])
  
  return (
    <div className="container">
    <Link 
      to="/profile"
      style={linkStyle}
      div className="return">Return To Profile
    </Link>
    <div className="project-form">
      <form onSubmit={(e) => handleCreateProject(e)} ref={formElement}>
        <label>Project Title</label><br />
        <input
          required
          type='text'
          name='title'
          autoComplete='off'
          placeholder='Title'
          onChange={handleChange}
        /><br />
        <label>Client: </label>
        <select name="client" onChange={handleChange}>
            <option value='' default></option>
          {clients.map((client) => (
            <option value={client._id} key={client._id}>{client.name}</option>
          ))}
        </select>
        <br/><br/>
        <label>Start Date</label><br />
        <input 
          required
          type='date'
          name='startDate'
          autoComplete='off'
          onChange={handleChange}
        /><br />
        <label>End Date</label><br />
        <input 
          required
          type='date'
          name='endDate'
          autoComplete='off'
          onChange={handleChange}
        /><br />
        <label>Hourly Rate</label><br />
        <input 
          required
          type='number'
          name='hourlyRate'
          autoComplete='off'
          onChange={handleChange}
        /><br />
        <button className='create'
          type="submit"
          disabled={!validForm}
        >
          Add Project
        </button>
      </form>
    </div>
  </div>
  )
}

export default ProjectForm