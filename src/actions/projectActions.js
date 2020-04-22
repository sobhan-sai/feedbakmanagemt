import axios from "axios";
import {GET_ERRORS} from "./types";
import {GET_EVENTS} from "./types";

export const loginUser=(user,history)=> async dispatch =>{
    try{
        const res=await axios.post("http://localhost:8081/login",user);
        console.log(res.data);
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("username", res.data.userName);
        sessionStorage.setItem("userEmpId", res.data.employeeId);

        if (res.data.role.includes("ROLE_ADMIN")) {
          sessionStorage.setItem("role", "Admin");
        } else if (res.data.role.includes("ROLE_PMO")) {
          sessionStorage.setItem("role", "Pmo");
        } else if (res.data.role.includes("ROLE_POC")) {
          sessionStorage.setItem("role", "Poc");
        } else {
          sessionStorage.setItem("role", "User");
        }
        history.push("/dashboard")
    }
    catch(err){
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        })
    }

};


export const getEvents=()=>async dispatch=>{
    const res=await axios.get("http://localhost:8082/eventInformation/events");
    console.log(res);
    dispatch({
        type:GET_EVENTS,
        payload:res.data
    });
}