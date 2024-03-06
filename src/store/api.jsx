import { useDispatch } from "react-redux"
import { userActions } from "./reducer"

const url ="http://localhost:8000/"

export const registerUser = async(reg)=>{

    const regData={
        action: 'register',
        payload: reg
    }
 
    const response = await  fetch (url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(regData)
    })
    if (!response.ok){
        throw new Error("Couldn't register")
    }

    const data= await response.json();
    return data
}

export const getProfile =async (token)=>{
  
  if (token !==""){
    const regData={
        action: 'getme'
    }
  const res =  await fetch (url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(regData)
    })

    if (!res.ok){
        throw new Error("Couldn't register")
    }
    const data= await res.json();
    console.log(data);
   
    return data
  }
}

export const loginUser = async (loginData) => {

    const reqData={
        action: "login",
        payload: loginData
    }
    console.log(reqData);

    // const reqData={
    //     action:"login",
    //     payload:{
    
    // email:"ahmed@gmail.com",
    // password:"password"}}

    console.log(reqData);
     const response = await fetch(url,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqData)})

        if (!response.ok){
            
            throw new Error("Couldn't login")
        }
       

        const data= await response.json();
        console.log(data);
        return data

}


export const  createTask = async (taskData)=>{
    const reqData={
        action: 'createTask',
        payload: taskData
    }
    console.log("create", reqData);
    const token =localStorage.getItem("token");

    console.log(token);
    const response = await fetch(url,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(reqData)})

        if (!response.ok){
            
            throw new Error("Couldn't create")
        }

        const data= await response.json();
        return data
}


export const getAllTask = async()=>{

    const reqData={
        action: 'allTask'
    }

    const token =localStorage.getItem("token")
   const response=  await fetch(url,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(reqData)})

        if (!response.ok){
            
            throw new Error("Couldn't create")
        }

        const data= await response.json();
        return data
    
}


export const updateTask =async (reqData)=>{
    const rData={
        action: 'updateTask',
        payload: reqData
    }

  const response=   await fetch (url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(rData)
    })
    if (!response.ok){
        throw new Error("Couldn't update")
    }
    const data= await response.json();
    console.log(data);
    return data
}


export const delTask = async (input)=>{
    const reqData={
        action: 'deleteTask',
        payload: input
    }

    const response=  await fetch(url,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(reqData)})

        if (!response.ok){
            
            throw new Error("Couldn't delete")
        }

        const data= await response.json();
        return data
}