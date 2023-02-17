import React, { useState } from "react";
import {RegistrationUser} from "../../Platform/Api/index"
import {useNavigate} from "react-router-dom";
import "./style.css"



export const Apply =()=>{
  const navigate = useNavigate()
  const [list,setList] = useState({
        Name: "",
        SurName: "",
        Age: "",
        Email: "",
        Password:"",
        ConfirmPassword: "",
        Img:"",
      })
      const [error,setError] = useState({
        errorName : '',
        errorSurName: "",
        errorAge: "",
        errorEmail: "",
        errorImg: "",
        errorPasswoard: "",
        errorConfirmPassword: "",
    })

    const validation = ()=>{
      let valid = true
    
      const errors = {
        errorName : '',
        errorSurName: "",
        errorAge: "",
        errorEmail: "",
        errorImg: "",
        errorPasswoard: "",
        errorConfirmPassword: "",
    
      }

      if(!list.Name){
        errors.errorName = "Required Name"
        valid = false
        }
      if(!list.SurName){
        errors.errorSurName = "Required SurName"
        valid = false
      }
      if(!list.Age){
        errors.errorAge  = "Required Age"
        valid = false
       }
      if(!list.Email){
        errors.errorEmail = "Required Email"
        valid = false
      }
      if(!list.Password){
        errors.errorPasswoard = "Required Password"
        valid = false
      } else if (!list.ConfirmPassword){
        errors.errorConfirmPassword = "Required Confirm Password"
        valid = false
      }
      if(!list.ConfirmPassword){
        errors.errorConfirmPassword = "Required Confirm Password"
        valid = false
      } else if (!list.Password){
        errors.errorPasswoard = "Required Password"
        valid = false
      }
      if(!list.Img){
        errors.errorImg = "Required Img"
        valid = false
      }
  
  setError(errors)
  
    return valid
  }


    const Change = (e)=>{
        setList({...list,[e.target.name]:e.target.value})
      }
      
    const Save = async () =>{
        const result = await  RegistrationUser(list) 
        if(validation()){
          if(result){
            navigate("/users")
          }
        }
       
    }
    const uploadImage = (e) => {
        const element = e.currentTarget
        const fileList = element.files;
        
        if (fileList && fileList?.length) {
          const reader = new FileReader();
          
          reader.addEventListener("load", () => {
           
    
            setList({...list, Img: reader.result})
          });
          reader.readAsDataURL(fileList[0]);
        }
      }
    return <div>
            <div className="div_one">
                <div>
                  <p>Name</p>
                  <input type="text" className="div_inp" name="Name" onChange={Change}  />
                  {error.errorName? <p className="error">{error.errorName}</p> : null}

                </div>
                <div>
                    <p>SurName</p>
                    <input type="text" className="div_inp"  name="SurName" onChange={Change} />
                  {error.errorSurName? <p className="error">{error.errorSurName}</p> : null}

                </div>
                <div>
                    <p>Age</p>
                    <input type="number" className="div_inp" name="Age" onChange={Change}  />
                    {error.errorAge? <p className="error">{error.errorAge}</p> : null}
                    
                  </div>
              </div>
              <div className="div_one">
              <div>
                    <p>Email</p>
                    <input type="email" className="div_inp" name="Email" onChange={Change}  />
                    {error.errorEmail? <p className="error">{error.errorEmail}</p> : null}

                </div>
                <div>
                    <p>Password</p>
                    <input type="password" className="div_inp" name="Password" onChange={Change}  />
                    {error.errorPasswoard? <p className="error">{error.errorPasswoard}</p> : null}
               </div>
                <div>
                    <p>Confirm Password</p>
                    <input type="password" className="div_inp" name="ConfirmPassword" onChange={Change}  />
                    {error.errorConfirmPassword? <p className="error">{error.errorConfirmPassword}</p> : null}

                </div>
              </div>
              <div className="img_inp">
                <div>
                     <p>Profile Image</p>
                </div>
                 <div> 
                      <input type="file" name="Img" onChange={uploadImage}  />
                    {error.errorImg? <p className="error">{error.errorImg}</p> : null}
                  </div>
               

                </div>
                
                <button className="inp_btn" onClick={Save}  >Save</button>
    </div>
}