import React from 'react';
import moment from 'moment'
// Style
import './project-card.scss'

const ProjectCard = (props) => {
  return (
    <div className='project-card'>
      <h2>{props.project.title}</h2>
      <h3>{props.project.client.name}</h3>
      <h3>Status: {props.project.is_Active ? "Active" : "Complete"}</h3>
      <h3>Start Date: {moment(props.project.startDate).utc().format('MM/DD/YYYY')}</h3>
      <h3>End Date: {moment(props.project.endDate).utc().format('MM/DD/YYYY')}</h3>
      <h3>Hourly Rate: ${props.project.hourlyRate}</h3>
      <h4>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</h4>
    </div>

  )
}

export default ProjectCard