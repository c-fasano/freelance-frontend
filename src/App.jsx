import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import * as authService from './services/authService'
import ProjectList from './pages/ProjectList'
import CreateProject from './pages/CreateProject/CreateProject'
import ProjectDetails from './pages/ProjectDetails'
import Profile from './pages/Profile/Profile'
import UpdateProject from './pages/UpdateProject/UpdateProject'
import ClientList from './pages/ClientList'
import CreateClient from './pages/AddClient/AddClient'
import ClientDetails from './pages/ClientDetails'
import UpdateClient from './pages/UpdateClient/UpdateClient'
import AddInvoice from './components/Invoice/AddInvoice'
import InvoiceList from './components/Invoice/InvoiceList'
import InvoiceDetails from './components/Invoice/InvoiceDetails'
import * as projectService from './services/projectService'
import * as clientService from './services/clientService'
import * as invoiceService from './services/invoiceService'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  const [projects, setProjects] = useState([])
  const [clients, setClients] = useState([])
  const [invoices, setInvoices] = useState([])
  const [clientListStatus, setClientListStatus] = useState (false)
  const [signInFormStatus, setSignInFormStatus] = useState (false)
  const [signUpFormStatus, setSignUpFormStatus] = useState (false)
  const [clientFormStatus, setClientInFormStatus] = useState (false)
  const [projectFormStatus, setProjectFormStatus] = useState (false)
  const [invoiceFormStatus, setInvoiceInFormStatus] = useState (false)


  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleUpdateProjectsList = (updatedProject) => {
    const updatedArray = projects.map(project => 
      project._id === updatedProject._id ? updatedProject : project
    )
    setProjects(updatedArray)
  }

  const handleUpdateClientsList = (updatedClient) => {
    const updatedArray = clients.map(client => 
      client._id === updatedClient._id ? updatedClient : client
    )
    setClients(updatedArray)
  }

  const handleUpdateInvoiceList = (updatedInvoice) => {
    const updatedArray = invoices.map(invoice => 
      invoice._id === updatedInvoice._id ? updatedInvoice : invoice
    )
    setInvoices(updatedArray)
  }


  useEffect(() => {
    const fetchProjects = async () => {
      const projectData = await projectService.getAllProjects()
      setProjects(projectData)
    }
    const fetchClients = async () => {
      const clientData = await clientService.getAllClients()
      setClients(clientData)
    }
    const fetchInvoices = async () => {
      const invoiceData = await invoiceService.getAllInvoices()
      setInvoices(invoiceData)
    }
    fetchProjects()
    fetchClients()
    fetchInvoices()
    return () => { 
      setProjects([]) 
      setClients([])
      setInvoices([])
    }
  }, [])

  return (
    <>
      {/* <NavBar user={user} handleLogout={handleLogout} /> */}
      <Routes>
        <Route path="/" element={<Landing user={user} handleLogout={handleLogout} signInFormStatus={signInFormStatus} setSignInFormStatus={setSignInFormStatus} signUpFormStatus={signUpFormStatus} setSignUpFormStatus={setSignUpFormStatus} handleSignupOrLogin={handleSignupOrLogin}/>} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profile"
          element={user ? <Profile user={user} projects={projects} clients={clients} clientListStatus={clientListStatus} setClientListStatus={setClientListStatus} handleLogout={handleLogout} projectFormStatus={projectFormStatus} setProjectFormStatus={setProjectFormStatus}/> : <Navigate to="/login" />}
        />
        <Route
          path="/projects"
          element={user ? <ProjectList projects={projects} setProjects={setProjects}/> : <Navigate to='/login' />}
        />
        <Route
          path="/projects/:id/edit"
          element={user ? <UpdateProject 
            handleUpdateProjectsList={handleUpdateProjectsList} clients={clients}/> 
            : 
            <Navigate to='/login' />}
        />
        <Route
          path="/newProject"
          element={user ? <CreateProject projects={projects} setProjects={setProjects} clients={clients}/> : <Navigate to='/login' />}
        />
        <Route
          path="/projects/:id"
          element={user ? <ProjectDetails projects={projects} setProjects={setProjects} handleUpdateProjectsList={handleUpdateProjectsList}/> : <Navigate to='/login' />}
        />
        <Route 
          path="/clients"
          element={user ? <ClientList user={user} clients={clients}/> : <Navigate to='/login' />}
        />
        <Route 
          path="/newClient"
          element={user ? <CreateClient user={user} clients={clients} setClients={setClients}/> : <Navigate to='/login' />}
        />
        <Route
          path="/clients/:id"
          element={user ? <ClientDetails clients={clients} setClients={setClients}/> : <Navigate to='/login' />}
        />
        <Route
          path="/clients/:id/edit"
          element={user ? <UpdateClient 
            handleUpdateClientsList={handleUpdateClientsList}/> 
            : 
            <Navigate to='/login' />}
        />
        <Route 
          path='/newInvoice'
          element={user ? <AddInvoice invoices={invoices} setInvoices={setInvoices} projects={projects} clients={clients}/> : <Navigate to="/login"/>}
        />
        <Route 
          path='/invoices'
          element={user ? <InvoiceList user={user} invoices={invoices}/> : <Navigate to='/login'/>}
        />
        <Route 
          path='/invoices/:id'
          element={user ? <InvoiceDetails user={user} invoices={invoices} handleUpdateInvoiceList={handleUpdateInvoiceList}/> : <Navigate to="/login"/>}
        />
      </Routes>
    </>
  )
}

export default App
