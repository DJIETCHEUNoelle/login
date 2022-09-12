import React from "react";
import Navbar from "../navbar/navbar";

const Login =() => {

    return(
      
        <div className="container">
          <Navbar/>

          <h1 className="gras">Login</h1>
          <div className="col-0">
            <input typeof="text" className="form-control" placeholder="Email Adress"></input>         
            


             </div>
             <div className="col-1 " >
            <input typeof="text" className="form-control" placeholder="Password"></input>   


            
             </div>
             <div className="col-2">
           <button className="btn">Login</button>    


            
             </div>
             
            <div className="col-3">
                  

            <h1>Forgot your Password</h1> 
             </div>  
        </div>
           
    )

}

export default Login