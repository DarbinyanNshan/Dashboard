import axios from "axios"


export const RegistrationUser = async (data) =>{
    return await axios.post(`${ApiUrl}list`, data )
  }
export const DeleteUser = (id) => {
    return  axios.delete(`${ApiUrl}list/${id}`)
  }
export const GetList = () => {
    return  axios.get(`${ApiUrl}list/`, )
  }
  
  

export const ApiUrl = 'https://crudcrud.com/api/9ec41da679ed483ebdb36d15e5f9e681/'
