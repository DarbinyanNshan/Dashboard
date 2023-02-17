import React, { useEffect, useState } from "react";
import { DeleteUser, GetList } from "../../Platform/Api";
import "./style.css"

export const Users = () =>{
   const [profile,setProfile]  = useState({})
   useEffect(()=>{
    GetUserList()
   },[])

   const GetUserList = async () => {
    const result = await  GetList()
    if (result.data) {
      setProfile(result.data)
    }
  }

  const handleDeleteProfile = (id) => {
    DeleteProfile(id);
}

const DeleteProfile = async (id) => {
  const result = await DeleteUser(id)
  if (result) {
    setProfile()
    
  }
  window.location.reload()
  
}

    return <div>
    <div  className="profile">
    {profile.length ? profile.map((item, index) => {
        return <div  key={index}>
          <div className="user">
            <img  className="img" src={item.Img}  />
               <p className="text"> Name: {item.Name}</p>
               <p className="text"> SurName: {item.SurName}</p>
               <p className="text"> Age:{item.Age}</p>
               <p className="text"> Email: {item.Email}</p>
               <button className="btn_delete" onClick={() => handleDeleteProfile(item._id)} >Delete</button>
                </div>
          
        </div>
      }): <h1 className="userprofile">User Profile</h1>}</div> 
     
    </div>
}