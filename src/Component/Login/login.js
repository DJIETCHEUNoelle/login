import React, { Component, Fragment, useEffect } from "react";
import './login.css';


class Login extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            //<Fragment>
               // login &nbsp;
            //</Fragment>
     <div className="body"><br></br><br></br>
        <div className="login">
                Login
        </div><br></br><br></br>
         <div className="Form">
             <input typeof='text' className='form-control' placeholder='Email Address' /><br></br><br></br>
             <input typeof='text' className='form-control' placeholder='Password' /><br></br><br></br>
         </div>

         <div className="button">
            <button className="blanc">Login</button>
         </div><br></br><br></br>

         <div className="forgot">
          <a href="forgot.js">Forgot your password?</a> 
         </div>

    </div>
        )
    }
}
export default Login;