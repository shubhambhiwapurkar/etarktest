import React, {Fragment} from 'react'
import { Link,withRouter } from 'react-router-dom'
import { signout,isAuthenticated } from '../auth/helper';




const curTab =(history,path) =>{
    if(history.location.pathname === path){
        return {color:"#f542a4"};
    }else{
        return {color :"#ffffff"};
    }
};


const Menu =({history}) =>(
    <div>
        <ul className ="nav nav-tabs bg-dark">
            <li className="nav-item">
                <Link style={curTab(history,"/")} className="nav-link" to="/">
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link style={curTab(history,"/cart")}className="nav-link" to="/cart">
                    Cart
                </Link>
            </li>
            {isAuthenticated()  && isAuthenticated().user.role === 0 && (
                <li className="nav-item">
                <Link style={curTab(history,"/user/dashboard")}className="nav-link" to="/user/dashboard">
                   U. Dashboard
                </Link>
            </li>
            )}
              {isAuthenticated()  && isAuthenticated().user.role === 1 && (
                <li className="nav-item">
                <Link style={curTab(history,"/admin/dashboard")}className="nav-link" to="/admin/dashboard">
                    A. Dashboard
                </Link>
            </li>
            )}
           
            {!isAuthenticated() && (
                  <Fragment>
                  <li className="nav-item">
                      <Link style={curTab(history,"/signup")}className="nav-link" to="/signup">
                          Sign up
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link style={curTab(history,"/Login")}className="nav-link" to="/login">
                          Sign in
                      </Link>
                  </li>
                  </Fragment>
            )}
            {isAuthenticated() && (
                <li className="nav-item">
               <span className="nav-link text-warning" onClick={()=>{
                   signout(()=>{
                       history.push("/")
                   })
               }}>
                Signout
               </span>
            </li>
            )}
        </ul>
        
        
    </div>
)

export default withRouter(Menu);