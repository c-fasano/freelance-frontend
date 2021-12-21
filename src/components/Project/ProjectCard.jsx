import React from 'react';
import moment from 'moment'
import './project-card.scss'

const ProjectCard = (props) => {
  return (
    <div className='project-card'>
      <h1>{props.project.title}</h1>
      <h3>{props.project.client.name}</h3>
      <h3>Status: {props.project.is_Active ? "Active" : "Complete"}</h3>
      <h3>Start Date: {moment(props.project.startDate).format('MM/DD/YYYY')}</h3>
      <h3>End Date: {moment(props.project.endDate).format('MM/DD/YYYY')}</h3>
      <h3>Hourly Rate: ${props.project.hourlyRate}</h3>
      <h3>Hours Worked: ${props.project.hoursWorked}</h3>
    </div>

  )
}

export default ProjectCard