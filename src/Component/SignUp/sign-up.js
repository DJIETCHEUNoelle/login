import React, { Component, Fragment, useEffect } from "react";

import './sign-up.css';

class SignUp extends Component {
    constructor(props){
        super(props)

       //this.props.history.push('/terms');
    }

    render(){
        return (
            <Fragment>
                 <div className="body"><br></br><br></br>
        <div className="login">
               NEW ACCOUNT
        </div><br></br><br></br>
         <div className="Form">
             <input typeof='text' className='Form-control' placeholder='Name' /><br></br><br></br>
             <input typeof='text' className='Form-control' placeholder='Email Adresse' /><br></br><br></br>
             <input typeof='text' className='Form-control' placeholder='Create Account' /><br></br><br></br>

         </div>

         <div className="button2">
            <button className="blanc">Sign UP</button>
         </div>

         <div className="terms">
           By signing up your agree to our <a href="terms">Terms of Service</a>
         </div>

    </div>
        
            </Fragment>
        )
    }
}

export default SignUp;