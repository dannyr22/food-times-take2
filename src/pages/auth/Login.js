import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';


const Login = () => {

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');


  const history = useHistory();
  const { setIsLoggedIn } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault()
      setIsLoggedIn(true)
      history.push("/home")
    }
  
  return (
    <div className="container mt-5">
      <div className="col-md-4 offset-md-4">
        <h6 className="mb-3">Sign in</h6>
        <form onSubmit={handleSubmit}>
          <input type="email" value={userId} noWhiteSpace className="form-control mb-3" placeholder="username or email address" onChange={(e) => setUserId(e.target.value)} />
          <input type="password" value={password} className="form-control mb-3" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
          <button className="btn btn-primary float-right">Login</button>
          <input className="form-check-input ml-1" type="checkbox" value="" id="checkedIn" />
          
          <label className="form-check-label ml-4" for="checkedIn">Keep Me Signed In</label>
          <div>
            <Link style={{display: 'block'}} className="mt-1" to="/">I forgot my password</Link>
            <Link style={{display: 'block'}} className="mt-1" to="/">Resend Verification Email</Link>
          </div>
          
        </form>
        
      </div>
     
     
     
     
     
      
        
       
    </div>
  )
}

export default Login
