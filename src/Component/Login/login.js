import React, { Component, Fragment, useEffect } from "react";
import Ahref from "../ahref";
import './login.css';


class Login extends Component{
    /* constructor(props){
        super(props);
        this.state = {

            ahref : "",
            isforgotNav: "",
            isForgot : true,
            
        
           
        }
    }

    click(element){
        if(element === 'ahref'){
            this.setState(
                {
                    isForgot: true,
                    forgotNav: "nav-active",

                    
                })
                this.props.handlea();
        }
        
    } */
        
    render(){
       // const{forgotNav, isForgot}=this.state
         
        return (
            
            //<Fragment>
               // login &nbsp;
            //</Fragment>
     <div className="body"><br></br>
        <div className="login">
                Login
        </div><br></br>
         <div className="Form">
             <input typeof='text' className='form-control' placeholder='Email Address' /><br></br>
             <input typeof='text' className='form-control' placeholder='Password' /><br></br>
         </div>

         <div className="button1">
            <button className="blanc">Login</button>
         </div><br></br>

         <div className="forgot">
            
                  forgot your password
        

         </div>
    
    </div>
        )
       
       
    }
     





}
export default Login;