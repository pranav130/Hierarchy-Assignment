import React,{useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import signpic from "../images/logo1.jpg";
// import axios from "axios";

const csinp = {
  borderTopStyle: 'hidden',
  borderRightStyle: 'hidden',
  borderLeftStyle: 'hidden',
  borderBottomStyle: 'groove',
  backgroundColor: '#fff'
};

const cont = {
  maxWidth: '60%'
};

const col = {
color: 'white',
width: '55%',
marginLeft: '25px'
};
const SignUp = () => {
  const navigate = useNavigate();

  const [user,setUser] = useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""});

    let name, value;
    const handleInputs = (e)=>{
      console.log(e);
      name = e.target.name;
      value = e.target.value;

      setUser({...user, [name]:value});
    }

   const PostData = async (e) =>{
     e.preventDefault();
     const {name, email, phone, work, password, cpassword} = user;

     const res = await fetch("/register",{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
     }); 
     
       const data = await res.json();

       if (data.status === 422 || !name || !email || !phone || !work || !password || !cpassword){
        window.alert("Invalid Registration...!!!");
        console.log("Invalid Registration...!!!");
       }
       else{
        window.alert("Registration Successful...!!!");
        console.log("Registration Successful...!!!");
          
        navigate('/login');
       }
      }
  //   if( name && email && phone && work && password && cpassword){
  //     const response = await axios({
  //         method: "post",
  //         url: "http://localhost:5000/register/",
  //         params: { name, email, phone, work, password, cpassword},
  //       }).then( res => {
  //         alert(res.data.message)
  //         navigate("/login")
          

  //     })
  // } else {
  //     alert("invalid input")
  // }
  //  }

  return (
    <>
      <section className='signup'>
          <div className='container mt-5 mb-5' style={cont}>
            <div className='signup-content justify-content-between'>
              <div className='signup-form'><br/>
                <h2 className='form-title'>Sign Up</h2>
                <form className='register-form align-items-center' method='POST' id='register-form'>
                  
                  <div className='form-group'>
                    <label htmlFor='name'>
                    <i className="zmdi zmdi-account"></i>
                    </label><br/>
                    <input type='text' style={csinp} name='name' id='name' autoComplete='off' 
                    value={user.name} 
                    onChange={handleInputs}
                    placeholder='Your Name' />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='email'>
                    <i className="zmdi zmdi-email"></i>
                    </label> <br></br> 
                    <input type='email' style={csinp} name='email' id='email' autoComplete='off' 
                    value={user.email} 
                    onChange={handleInputs}
                    placeholder='Your Email' />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='phone'>
                    <i className="zmdi zmdi-phone-in-talk"></i>
                    </label> <br></br> 
                    <input type='text' style={csinp} name='phone' id='phone' autoComplete='off' 
                    value={user.phone} 
                    onChange={handleInputs}
                    placeholder='Your Phone' />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='work'>
                    <i className="zmdi zmdi-slideshow"></i>
                    </label> <br></br> 
                    <input type='text' style={csinp} name='work' id='work' autoComplete='off' 
                    value={user.work} 
                    onChange={handleInputs}
                    placeholder='Your Designation' />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='password'>
                    <i className="zmdi zmdi-lock"></i>
                    </label> <br></br> 
                    <input type='password' style={csinp} name='password' id='password' autoComplete='off' 
                    value={user.password} 
                    onChange={handleInputs}
                    placeholder='Your Password' />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='cpassword'>
                    <i className="zmdi zmdi-lock"></i>
                    </label> <br></br> 
                    <input type='password' style={csinp} name='cpassword' id='cpassword' autoComplete='off' 
                    value={user.cpassword} 
                    onChange={handleInputs}
                    placeholder='Confirm Your Password' />
                  </div>
                  <br></br>
                  <div className='form-group form-button'>
                             <input type='submit' name='signup' id='signup' className='form-submit btn btn-primary'
                              value='Register' onClick={PostData} />
                         <br/><br/>    
                
            
                  </div>

                </form>
                </div>
                <div className='signup-image'>
                   <figure>
                    <img src={signpic} alt='SignUp Pic' />
                   </figure><br/>
                   <NavLink to='/login' style={col} type='button' className="cl-lg-2 nav-link btn btn-success">Already A Registered User</NavLink>
              
                </div>
                </div>
          </div>
      </section>
    </>
  )

}
export default SignUp
