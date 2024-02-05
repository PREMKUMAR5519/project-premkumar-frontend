import { useState } from 'react'
import './App.css'
import{BrowserRouter as Router, Route,Routes,Navigate}from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Verifier from './components/Verifier'
import NewUser from './components/NewUser';
import ExistingUser from './components/ExistingUser';
import {UserProvider} from './components/UserContext'
import { ToastContainer, toast } from 'react-toastify';
import MainPage from './components/MainPage'
import Settings from './components/Settings'

function App() {

  return (
    <UserProvider>
    <Router>
    <Routes>
      <Route path='/register' Component={Register} > </Route>
      <Route path='/login' Component={Login} > </Route>
      <Route path='/verifier' Component={Verifier} > </Route>
      <Route path='/NewUser' Component={NewUser} > </Route>
      <Route path='/settings' Component={Settings} > </Route>
      <Route path='/ExistingUser' Component={ExistingUser} > </Route>
      <Route path='/'element={<MainPage/>}> </Route>


    </Routes>
  </Router>
  <ToastContainer/>
  </UserProvider>
  )
}

export default App
