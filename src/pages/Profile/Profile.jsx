import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProjects } from '../../redux/actions/projectActions';
import { fetchClients } from '../../redux/actions/clientActions';
// Components
// Styles
import './profile.scss'

const Profile = ({user, clientListStatus, setClientListStatus, handleLogout}) => {
  const dispatch = useDispatch()
  const projects = useSelector((state) => state.allProjects.projects)
  const clients = useSelector((state) => state.allClients.clients)

  useEffect(() => {
    dispatch(fetchProjects())
    dispatch(fetchClients())
  }, [])

const navLinkStyle = {
  fontSize: "2.3vw",
  color: "#D9D9D9",
  marginLeft: "3%"
}

  return (
    <div className="prof-page">
      <div className="header"></div>
      <div className="prof-side-bar">
        <div className="prof-picture">
          <h1>{user.name}</h1>
        </div>
        <div className="prof-card">  
        </div>
        <div className="side-nav">
            <br/><br/>
            <p><button onClick={() => setClientListStatus(!clientListStatus)}>Client List</button></p>
            <br/>
            <Link to="/newProject" style={navLinkStyle}>Create New Project</Link>
            <br/><br/>
            <Link to="/newClient" style={navLinkStyle}>Add New Client</Link>
            <br/><br/>
            <Link to="/newInvoice" style={navLinkStyle}>Write Invoice</Link>
            <br/><br/>
            <Link to="/invoices" style={navLinkStyle}>Invoices</Link>
            <br/><br/>
            <Link to="" onClick={handleLogout} style={navLinkStyle}>Log Out</Link>
        </div>
      </div>
      {projects?.length > 0 &&
        <section className="project-container">
            {projects?.map((project) => (
              <Link key={project._id} to={`/projects/${project._id}`}>
                <div className="project-list">
                  <h1>{project.title}</h1>
                  <h2>{project.is_Active}</h2>
                  <h2>Deliver By: {moment(project.endDate).format('MM/DD/YYYY')}</h2>
                  <h3>${project.hourlyRate} /Hr</h3>
                  <br/>
                </div>
              </Link>
            ))}
        </section>
      }
      <div className={`clients ${clientListStatus ? "inactive-list" : "active-list"}`}>
        <h1 className="list-title">Client List</h1>
        <br/>
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
