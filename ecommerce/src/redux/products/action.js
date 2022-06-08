import axios from "axios";
import * as types from "./action-types";


const fetchdatarequest = (payload)=>{
    return {
        type:types.FETCH_DATA_REQUEST,
        payload
    }
}

const fetchdatasuccess = (payload)=>{
    return {
        type:types.FETCH_DATA_SUCCESS,
        payload
    }
}

const fetchdatafailed = (payload)=>{
    return {
        type:types.FETCH_DATA_FAILED,
        payload
    }
}

const fetchdata = (payload) =>{
    return (dispatch)=>{
        dispatch(fetchdatarequest())
    
    axios.get("/products")
    .then(r=>dispatch(fetchdatasuccess(r.data)))
    .catch((err)=>dispatch(fetchdatafailed(err.data)))
    }
}

export {fetchdata};