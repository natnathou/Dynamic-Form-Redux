import _                 from "lodash"
import {combineReducers} from 'redux'
import formValueReducer  from './formValueReducer'
import formPropsReducer  from './formPropsReducer'
import errorReducer      from "./errorReducer"
import formField         from "../components/Form/json/formField"

const obj={}
_.keys(formField).forEach(data=>{
    obj[data]=combineReducers({
        formValue   : formValueReducer,
        formProps   : formPropsReducer,
        displayError: errorReducer
        
    })
})

export default combineReducers(obj)