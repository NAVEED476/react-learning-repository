import {legacy_createStore,combineReducers,applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"

import productreducer from "./products/reducer"



const rootReducer  = combineReducers({ecommercedata : productreducer})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = legacy_createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
)
