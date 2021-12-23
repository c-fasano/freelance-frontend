import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'
// Components
import ClientList from '../ClientList';
// Styles
import './profile.scss'

const Profile = ({user, projects, clients, clientListStatus, setClientListStatus}) => {
  console.log(clientListStatus)

const navLinkStyle = {
  fontSize: "2vw",
  color: "#D9D9D9",
  marginLeft: "3%"
}

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
            <Link to="/newProject" style={navLinkStyle}>Create New Project</Link>
            <br/><br/>
            <Link to="/newClient" style={navLinkStyle}>Add New Client</Link>
            <br/><br/>
            <p>Log Out</p>
        </div>
      </div>
      {projects.length > 0 &&
        <section className="project-container">
            {projects?.map((project) => (
              <Link key={project._id} to={`/projects/${project._id}`}>
                <div className="project-list">
                  <h1>{project.title}</h1>
                  <h2>{moment(project.startDate).format('MM/DD/YYYY')}</h2>
                  <h2>{moment(project.endDate).format('MM/DD/YYYY')}</h2>
                  <h3>${project.hourlyRate} /Hr</h3>
                </div>
              </Link>
            ))}
        </section>
      }
      <div className={`clients ${clientListStatus ? "inactive-list" : "active-list"}`}>
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

//will line 37 need to be a button with handle logout attached to it?
