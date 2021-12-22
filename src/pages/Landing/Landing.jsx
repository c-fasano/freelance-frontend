import { Link } from 'react-router-dom'

import SignInForm from '../../components/Forms/signInForm'
import SignUpForm from '../../components/Forms/signUpForm'

import './landing.scss'

const Landing = ({ user, handleLogout, signInFormStatus, setSignInFormStatus,  handleSignupOrLogin, signUpFormStatus, setSignUpFormStatus}) => {
  return (
    <div className="container">
      <div className="navigation">
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
            <button onClick={() => setSignInFormStatus(!signInFormStatus)}>Form Trigger SignIn</button>
            <li><Link to="/signup">Sign Up</Link></li>
            <button onClick={() => setSignUpFormStatus(!signUpFormStatus)}>Form Trigger SignUp</button>
            </ul>
          </div>
        }
      </div>
      <section className="one">
        <div className="title-info">
          <br/>
          <br/>
          <br/>
          <div className={`sign-in-form ${signInFormStatus ? "active-sign-in" : "inactive-sign-in"}`}>
            <SignInForm 
              handleSignupOrLogin={handleSignupOrLogin}
            />
          </div>
          <div className={`sign-up-form ${signUpFormStatus ? "active-sign-up" : "inactive-sign-up"}`}>
            <SignUpForm
              handleSignupOrLogin={handleSignupOrLogin}
            />
          </div>
          <h1>Folio</h1>
          <h2>An App for Freelancers</h2>
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
