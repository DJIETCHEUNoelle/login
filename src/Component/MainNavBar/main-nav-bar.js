import React, { Component, Fragment, useEffect  } from "react";
import './main-nav-bar.css';

class MainNavBar extends Component{
    constructor(props){
        super(props);
        this.state = {

            //ce que jajoute
          
            loginNav : "nav-active",
            signUpNav : "",
            forgotNav : "",
            
            isForgot : false,
            
        }
    }
    
    

    activenavBar(element){
        if(element === 'loginNav'){
            this.setState({
                loginNav : "nav-active",
                signUpNav : "",
                isForgot : false,
              
            })
            this.props.handleLogin();
        }else if(element === 'signUpNav'){
            this.setState({
                isForgot : false,

                loginNav : "",
                signUpNav : "nav-active",
               
            })
            this.props.handleSignUp();
        }
      
          else if(element === 'forNav'){
            this.setState({
                
                loginNav : "",
                signUpNav : "",
                isForgot: true,
                forgotNav : "nav-active",
            })
            this.props.handleForgot();
        }   

    }
    
   
    //ce que jajoute
    
  

    render(){
        const {loginNav, signUpNav,forgotNav,isForgot,forNav} = this.state
        return (
            <Fragment>
                <div className="nav-content">
                    <div onClick={()=>{this.activenavBar("loginNav")}} className={"nav-title "+ loginNav}>Login</div>
                    <div onClick={()=>{this.activenavBar("signUpNav")}} className={"nav-title "+ signUpNav}>Sign Up</div>
                 {/*    {
                        
                        isForgot &&
                        <div onClick={()=>{this.activeNavBar("ahrefNav")}} className={"nav-title "+ ahrefNav}>Forgot</div>
                    }  */}
               

                
                 {
                     isForgot &&
                    <div onClick={()=>{this.activenavBar("forgotNav")}} className={"nav-title "+ forgotNav}>Forgot</div>
             } 
                <div onClick={()=>{this.activenavBar("forNav")}} className={"nav "+ forNav}>Forgot your password</div> 

             </div>      
               

            </Fragment>
        ) 
    }
}

export default MainNavBar;