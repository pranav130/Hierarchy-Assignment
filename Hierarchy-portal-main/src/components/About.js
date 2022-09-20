import React, {useEffect, useState} from 'react'
import shivapic from "../images/shiva.jpg";
import { useNavigate} from 'react-router-dom';
import axios from "axios";

const bt =  {border: '0px solid #eee',
  color: '#460B13',
  fontFamily:'Apple Chancery, cursive',
  backgroundColor: '#fff',
  paddingLeft: '80px'
}
const btl =  {
  color: '#460B13',
  fontFamily:'Gill Sans, sans-serif',
  paddingLeft: '80px'
}
const cont = {
   maxWidth: '80%',
   marginBottom: '100px',
   paddingBottom: '10px'
 };

 

const About = () => {

     const navigate = useNavigate(); 
     const [userData, setData] = useState({});
     const [users, setUser] = useState([]);
    // const [user1, setUser1] = useState([]);
    
    
   useEffect(() => {
       callAboutPage();
       // loadUser1();
       loadUsers();
    }, []);
  

   const callAboutPage = async () =>{

      try {
         const res = await fetch('/about', {
            method: "GET",
            headers: {
               Accept: "application/json",
               "Content-Type":"application.json"
            },
            credentials:"include"
         });

         const data = await res.json();
         console.log(data);
         setData(data);
         
          if(!res.status === 200){
            const error = new Error(res.error);
            throw error;
          }

      } catch (err) {
         console.log(err);
         navigate('/login');
      }
   }
  

 
 
 const loadUsers = async () => {
   const result = await axios.get("http://localhost:8080/fetchlist");
   // console.log(result);
   // console.log(result.data.reverse())
   setUser(result.data);
 };
 
 const loadUser1 = async () => {
    const result = await axios.get("http://localhost:8080/fetchlist");
    // console.log(result);
    // console.log(result.data.reverse())
    setUser1(result.data);
  };

  return (
    <>
      <div className='container emp-profile mt-5' style={cont}>
             <form method='GET'>
                   <div className='row'>
                        <div className='col-md-4'>
                           <div className='profile-img' >
                           <img src={shivapic} alt="pic" />
                           </div>
                        </div>

              <div className='col-md-6'>
                      <div className='profile-head'><br/>
                           <h5><b>{userData.name}</b></h5>
                          <h5>{userData.work}</h5>
                            <br/>
                          <ul className='nav nav-tabs' role='tablist'>
                            
                            <li  className= "nav-item">
                              <a className='nav-link active'  id='home-tab'  data-toggle='tab'  role='tab'  href='#home'>About </a>
                            </li>

                            <li className= "nav-item">
                             <a className='nav-link '  id='home-tab'  data-toggle='tab'  role='tab'  href='#profile'>Heirarchy </a>
                            </li>
                            <li className= "nav-item">
                            
                            <a className='nav-link '  id='home-tab'  data-toggle='tab'  role='tab' href='#reporting'>Reporting officer</a>
                           </li>
                           <li className= "nav-item">
                            <a className='nav-link '  id='home-tab'  data-toggle='tab'  role='tab'  href='#workassign'>Work Assignment </a>
                           </li>
                          </ul>
                
                      </div>
              
                 </div>

           <div className='col-md-2' ><br/>
              {/* <input type='submit' className='profile-edit-btn btn btn-primary' name='btnAddMore' value='Edit Profile' ></input> */}
           </div>

          </div >

          <div className='row' >
            
            <div className='col-md-4' >  
              <div className='pofile-work' >
                 <b><p style={btl}>WORK LINKS</p></b>
                
                <b><a href='https://www.upenergy.in/' target='_link' style={bt}>UPPCL WEBSITE</a><br/></b>
                <b><a href='https://www.upenergy.in/' target='_link' style={bt}>MVVNL</a><br/></b>
                <b><a href='https://www.upenergy.in/' target='_link' style={bt}> PVVNL</a><br/></b>
                <b><a href='https://www.upenergy.in/' target='_link' style={bt}> PuVVNL</a><br/></b>
                <b><a href='https://www.upenergy.in/' target='_link' style={bt}> DVVNL</a><br/></b>
                <b><a href='https://www.upenergy.in/' target='_link' style={bt}>KESCO</a><br/></b>
                 <br/>
              </div>
            </div>
               
              <div className='col-md-8 pl-5 about-info' >
                 <div className='tab-content profile-tab' id='myTabContent' >
                   <div className='tab-pane fade show active' id='home' role='tabpanel'  area-aria-labelledby='home-tab'>
                      <div className='row' >
                         <div className='col-md-6' >
                            <label >User ID </label>
                         </div>
                          <div className='col-md-6' >
                            <p>6454456154</p>
                         </div>
                         <div className='col-md-6' >
                            <label >Name </label>
                         </div>
                          <div className='col-md-6' >
                            <p>{userData.name}</p>
                         </div>
                         <div className='col-md-6' >
                            <label > Email </label>
                         </div>
                          <div className='col-md-6' >
                            <p>{userData.email}</p>
                         </div>
                         <div className='col-md-6' >
                            <label > Phone </label>
                         </div>
                          <div className='col-md-6' >
                            <p>{userData.phone}</p>
                         </div>
                      </div>
                   </div>
                   <div className='tab-pane fade show active' id='profile' role='tabpanel'  area-aria-labelledby='profile-tab'>
                      <div className='row' >
                         <div className='col-md-6' >
                            <label > Reporting Officer </label>
                         </div>
                          <div className='col-md-6' >
                            <p>Executive Engg</p>
                         </div>                 
                        <div className='col-md-6' >
                            <label > Subordinate </label>
                         </div>
                          <div className='col-md-6' >
                            <p>Junior Engg</p>
                         </div>
                      </div>
                   </div>


                   <div className='tab-pane fade show active' id='reporting' role='tabpanel'  area-aria-labelledby='reporting-tab'>
         <div className="container">
          <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
            <th scope="col">#</th>
              <th scope="col">Consumer ID</th>
              <th scope="col">Consumername</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Address</th>
              <th scope="col">Assigned Lineman</th>
              <th scope="col">Work Status</th>
              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.Consumerid}</td>
                <td>{user.Consumername}</td>
                <td>{user.Mobnumber}</td>
                <td>{user.Address}</td>
                <td>{user.Assignedlineman}</td>
                <td>{user.Workstatus}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
          </div>
         </div>

      <div className='tab-pane fade show active' id='workassign' role='tabpanel'  area-aria-labelledby='workassign-tab'>
      <div className="container">
      <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
            <th scope="col">#</th>
              <th scope="col">Consumer ID</th>
              <th scope="col">Consumername</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Address</th>
              <th scope="col">Assigned Lineman</th>
              <th scope="col">Work Status</th>
              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user1.map((user1, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user1.Consumerid}</td>
                <td>{user1.Consumername}</td>
                <td>{user1.Mobnumber}</td>
                <td>{user1.Address}</td>
                <td>{user1.Assignedlineman}</td>
                <td>{user1.Workstatus}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
         </div>
         </div> 



                 </div>
              </div>

          </div>

        </form>
      </div>
    </>
  )
}

export default About
