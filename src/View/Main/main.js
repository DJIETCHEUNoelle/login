import React, { Component, Fragment, useEffect } from "react";
import Forgot from "../../Component/Forgot/forgot";
import Login from "../../Component/Login/login";
import MainNavBar from "../../Component/MainNavBar/main-nav-bar";
import SignUp from "../../Component/SignUp/sign-up";
import './main.css';

class Main extends Component {
    constructor(props){
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleSignUp = this.handleSignUp.bind(this)
        this.handleForgot = this.handleForgot.bind(this)
    }
    state = {
        isLogin : true,
        isSignUp : false,
        isForgot : false,
    }

    handleLogin(){
        this.setState({
            isLogin : true,
            isSignUp : false,
            isForgot : false,
        })
    }

    handleSignUp(){
        this.setState({
            isLogin : false,
            isSignUp : true,
            isForgot : false,
        })
    }

    handleForgot(){
        this.setState({
            isLogin : false,
            isSignUp : false,
            isForgot : true,
        })
    }

    render(){
        const {isLogin, isSignUp, isForgot} = this.state
        return (
            <Fragment>
                <div className="main-content">
                    <MainNavBar handleForgot={this.handleForgot} handleLogin={this.handleLogin} handleSignUp={this.handleSignUp} />
                    {isLogin && <Login />}
                    {isSignUp && <SignUp />}
                    {isForgot && <Forgot />}
                </div>
            </Fragment>
        )
    }
}

export default Main;