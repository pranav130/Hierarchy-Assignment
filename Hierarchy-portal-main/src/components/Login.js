import React,{useState, useContext} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import loginpic from "../images/logo2.jpg";
import { UserContext } from '../App';


const csinp = {
  borderTopStyle: 'hidden',
  borderRightStyle: 'hidden',
  borderLeftStyle: 'hidden',
  borderBottomStyle: 'groove',
  backgroundColor: '#fff'
};
const fig = {
  marginRight: '63px'
};
const ttl = {
  fontWeight: 'bold',
  paddingRight: '100px'
};

const cont = {
  maxWidth: '48%',
  marginBottom: '90px',
  paddingBottom: '0px'
};

const col = {
color: 'white',
width: '48%',
marginLeft: '78px'
};

const Login = () => {

  const { state, dispatch } = useContext(UserContext);
   
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  
  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch('/signin', {
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    });

    const data = res.json();

    if (res.status === 400 || !data) {
        window.alert("Invalid Credentials");
    } else {
      dispatch({type: "USER", payload: true})
        window.alert("Login Successfull");
        navigate("/");
    }
}
return (
    <>
       <section className='signin'>
          <div className='container mt-5' style={cont}>
            <div className='signin-content'>
            <div className='signin-image'>
              
                   <figure style={fig}>
                    <img src={loginpic} alt='Login Pic' />
                   </figure><br/>
                   <NavLink to='/signup' style={col} type='button' className="cl-lg-2 nav-link btn btn-success">Create An Account</NavLink>
                   <br/><br/>
                </div>
              <div style={ttl} className='signin-form'>
                <br/><br/>
                <h2  className='form-title'>Sign In</h2>
                <form className='register-form' method='POST' id='register-form'>

                  <div className='form-group'>
                    <label htmlFor='email'>
                    <i className="zmdi zmdi-email"></i>
                    </label> <br></br> 
                    <input type='email' style={csinp} name='email' id='email' autoComplete='off' 
                    value={email} onChange ={ (e) => setEmail(e.target.value) }
                     placeholder='Your Email' />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='password'>
                    <i className="zmdi zmdi-lock"></i>
                    </label> <br></br> 
                    <input type='password' style={csinp} name='password' id='password' autoComplete='off'
                     value={password} onChange ={ (e) => setPassword(e.target.value) }    
                     placeholder='Your Password' />
                  </div>

                  <br></br>
                  <div className='form-group form-button'>
                             <input type='submit' name='signin' id='signin' className='form-submit btn btn-primary'  
                                onClick={loginUser} value='Sign In'/>
                         <br/><br/>    
                
            
                  </div>

                </form>
                </div>
                
                </div>
          </div>
      </section>
    </>
  )
}

export default Login
