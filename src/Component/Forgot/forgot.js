import React, { Component, Fragment, useEffect } from "react";

import './forgot.css';

class Forgot extends Component {
    constructor(props){
        super(props)
        }

    render(){
        return (
            <Fragment>
                <div className="body"><br></br><br></br>
        <div className="login">
              FORGOT PASSWORD
        </div><br></br><br></br>
         <div className="Form">
             
             <input typeof='text' className='control' placeholder='Email Adresse' /><br></br><br></br>
          

         </div>

         <div className="button3">
            <button className="blanc">Send recovery Email</button>
         </div><br></br><br></br>

         <div className="Forgot">
         An email will be sent to your email adress to allow you to reset your password
         </div>

    </div>
            </Fragment>
        )
    }
}

export default Forgot;