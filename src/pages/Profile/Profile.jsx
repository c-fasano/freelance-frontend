import React from 'react';
import { Link } from 'react-router-dom';
import './profile.scss'
import moment from 'moment'
import ProjectForm from '../../components/Forms/projectForm';
const Profile = ({user, projects, clients, clientListStatus, setClientListStatus, handleLogout, projectFormStatus, setProjectFormStatus, handleCreateProject}) => {
  
  return (
    <div className="prof-page">
      <div className="header">
        <button className="prof-toggle">Icon</button>
      </div>
      <div className="prof-side-bar">
        <div className="prof-picture">
        </div>
        <div className="prof-card">
          <h1>{user.name}</h1>
        </div>
        <div className="side-nav">
            <br/><br/>
            <p><button onClick={() => setClientListStatus(!clientListStatus)}>Client List</button></p>
            <br/><br/>
            <p><button onClick={() => setProjectFormStatus(!projectFormStatus)}>Create Project</button></p>
            <br/><br/>
            <p>Another Link</p>
            <br/><br/>
            <p><Link to="/" onClick={handleLogout}>LOG OUT</Link></p>
        </div>
      </div>
      <div className={`project-form ${projectFormStatus ? "active-project-form" : "inactive-project-form"}`}>
        <ProjectForm 
          handleCreateProject={handleCreateProject}
        />
      </div>
      <section className="project-container">
          {projects?.map((project) => (
            <div className="project-list">
              <h1>{project.title}</h1>
              <h2>Start Date: {moment(project.startDate).format('MM/DD/YYYY')}</h2>
              <h2>Complete By: {moment(project.endDate).format('MM/DD/YYYY')}</h2>
              <h3>${project.hourlyRate} /Hr</h3>
            </div>
          ))}
      </section>
      <div className={`clients ${clientListStatus ? "active-list" : "inactive-list"}`}>
        <h1 className="list-title">Client List</h1>
          {clients?.map((client) => (
            <div className="client">
              <h1>{client.name}</h1>
              <h2>{client.email}</h2>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Profile

