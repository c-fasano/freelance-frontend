import React, { useEffect, useRef } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';


const ProjectForm = ({ handleCreateProject, handleChange, validForm, setValidForm, formData, clients}) => {
  const formElement = useRef()
  
  // useEffect(() => {
  //   formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  // }, [formData])

  return (
    <div className="new-project">
      <Form onSubmit={(e) => handleCreateProject(e)} ref={formElement}>
        <FormGroup>
          <Label for="project-name">Project Title</Label>
          <Input 
            required
            type="text"
            name="title"
            autoComplete='off'
            placeholder='Title'
            onChange={handleChange}
          />
        </FormGroup>
        {/* <FormGroup>
          <Label for="client">Name of Client</Label>
          <select name="client" onChange={handleChange}>
            <option value='' default></option>
          {clients.map((client) => (
            <option value={client._id} key={client._id}>{client.name}</option>
          ))}</select>
        </FormGroup> */}
        <FormGroup>
          <Label for="startDate">Start Date</Label>
          <Input 
            required
            type='date'
            name='startDate'
            autoComplete='off'
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="endDate">Delivery Date</Label>
          <Input 
            required
            type='date'
            name='endDate'
            autoComplete='off'
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="rate">Hourly Rate</Label>
          <Input 
            // required
            type='number'
            name='hourlyRate'
            autoComplete='off'
            onChange={handleChange}
          />
        </FormGroup>
        <Button type='submit' disabled={!validForm}></Button>
      </Form> 
    </div>
  )
}

export default ProjectForm