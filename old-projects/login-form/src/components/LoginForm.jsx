 import { useState } from 'react'
 import './LoginForm.css'

 export function LoginForm(){

        const [showPassword, togglePassword] = useState(false);

        function toggle() {
          togglePassword(!showPassword);
        }
        
        return (
          <>
            <div>
              <input 
                placeholder="Email"
               />
            </div>
               
            <div>
              <input 
                placeholder="Password"
                type={showPassword === true ? "text" : "password"} 
               />

               <button 
                className="show-btn"
                onClick={toggle}
               
               >👁️Show</button>
            </div>

            <button className="btn">Login</button>
            <button className="btn">Sign up</button>
          </>
        );
              
      }