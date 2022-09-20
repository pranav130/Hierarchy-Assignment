import React, {createContext, useReducer} from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import 'bootstrap/dist/css/bootstrap.css'
import { Routes, Route } from "react-router-dom";

import { initialState, reducer } from './components/reducer/UseReducer';


export const UserContext = createContext();

const Routing = () => {
  return(
    <Routes>
        <Route exact path="/" element={<Home />}></Route>
      
        <Route path="/login" element={<Login />}></Route>

        <Route path="/signup" element={<Signup/>}></Route>
      
        <Route path="/about" element={<About/>}></Route>
      
        <Route path="/contact" element={<Contact/>}></Route>

        <Route path="/logout" element={<Logout/>}></Route>
      </Routes>
  )
}


const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
    <section className='app-cont'>
      <UserContext.Provider value={{state, dispatch}}>
    <Navbar />
    <Routing />
      </UserContext.Provider>
      </section>
    </>
  )
}

export default App
