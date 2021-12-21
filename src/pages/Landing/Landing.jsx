import { Link } from 'react-router-dom'

import styles from './Landing.module.css'
import './landing.scss'

const Landing = ({ user, handleLogout }) => {
  return (
    
    <div className="container">
      {user ? 
        <div className="user-nav">
          <ul>
            <li><Link to="/profile">View Profile</Link></li>
            <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
          </ul>
        </div>
      :
        <div className="reg-nav">
          <ul>
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </div>
      }
      <section className="one">
        <div className="title-info">
          <br/>
          <br/>
          <br/>
          <h1>Folio</h1>
        </div>
      </section>
      <section className="spacer1"></section>
      <section className="two">
        <h1>Second</h1>
      </section>
      <section className="spacer2"></section>
      <section className="three">
        <h1>Third</h1>
      </section>
    </div>
  )
}

export default Landing
