import React, { Component, Fragment } from "react";
import './main-nav-bar.css';

class MainNavBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            loginNav : "nav-active",
            signUpNav : "",
            forgotNav : "",
            isForgot : true,
        }
    }

    activeNavBar(element){
        if(element === 'loginNav'){
            this.setState({
                loginNav : "nav-active",
                signUpNav : "",
                forgotNav : "",
            })
            this.props.handleLogin();
        }else if(element === 'signUpNav'){
            this.setState({
                loginNav : "",
                signUpNav : "nav-active",
                forgotNav : "",
            })
            this.props.handleSignUp();
        }else if(element === 'forgotNav'){
            this.setState({
                loginNav : "",
                signUpNav : "",
                forgotNav : "nav-active",
            })
            this.props.handleForgot();
        }
    }

    render(){
        const {loginNav, signUpNav, forgotNav, isForgot} = this.state
        return (
            <Fragment>
                <div className="nav-content">
                    <div onClick={()=>{this.activeNavBar("loginNav")}} className={"nav-title "+ loginNav}>Login</div>
                    <div onClick={()=>{this.activeNavBar("signUpNav")}} className={"nav-title "+ signUpNav}>Sign Up</div>
                    {
                        isForgot &&
                        <div onClick={()=>{this.activeNavBar("forgotNav")}} className={"nav-title "+ forgotNav}>Forgot</div>
                    }
                </div>
            </Fragment>
        ) 
    }
}

export default MainNavBar