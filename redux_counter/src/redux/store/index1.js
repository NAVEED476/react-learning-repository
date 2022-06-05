import { createStore } from "redux";



const reducer_function = (state = {counter:0},action) =>{ 

    // if(action.type=="ADD"){
    //     return {counter:state.counter+1}
    // }
    // if(action.type == "DEC"){
    //     return {counter:state.counter-1}
    // }
    // if(action.type=="ADD_BY"){
    //     return {counter:state.counter+action.payload}
    // }

    switch(action.type){
        case "ADD":
            return {counter:state.counter+1}
            break;
        case "DEC":
            return {counter:state.counter-1}
            break;
        case "ADD_BY":
            return {counter:state.counter+action.payload}
    }
    return state;
}


const store = createStore(reducer_function)

export default store;