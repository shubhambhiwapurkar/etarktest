import React from "react";
import Menu from "./Menu";

const Base = ({
    title="My Title",
    description="my desc",
    className="bg-dark text-white p-4",
    children
}) => (
  <div>
    <Menu/>
    <div className="contianer-fluid">
      <div class="jumbotron bg-dark text-white text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>
          {children}

      </div>
    </div>
    <footer className="footer bg-dark mt-auto py-3">
      <div class="container-fluid">
     
      
        
      </div>
      <div class="container">
          <span className="text-muted">
              
          </span>
         
      
      
      </div>
    </footer>
    
  </div>
  
);

export default Base;
