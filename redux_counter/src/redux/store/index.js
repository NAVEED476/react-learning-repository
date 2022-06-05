import { createStore } from "redux";

const reducerfunction = (state = {counter:0},action) =>{


    if(action.type==="INC"){
        return {counter:state.counter+1}
    }
    if(action.type === "DEC"){
        return {counter:state.counter-1}
    }
    if(action.type==="ADD_BY"){
        return {counter:state.counter + action.payload}
    }
    return state;
    
}

const store = createStore(reducerfunction)

export default store;