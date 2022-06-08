import * as types from "./action-types"

const initialstate = {
    products:[],
   
}


const reducer = (state = initialstate,action)=>{
    const {type,payload} = action;
    switch(type){
        case  types.FETCH_DATA_REQUEST:
            return {
                ...state,
               
            }
        case types.FETCH_DATA_SUCCESS:
            return {
                ...state,
                products:payload,
                

            }
        case types.FETCH_DATA_FAILED:
            return {
                ...state,
                
            }
        
        default :
            return state;
    }
}

export default reducer;