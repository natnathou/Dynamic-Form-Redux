import {combineReducers} from 'redux'
import formValueReducer  from './formValueReducer'
import formPropsReducer  from './formPropsReducer'
import errorReducer      from "./errorReducer"


export default combineReducers({
    formValue   : formValueReducer,
    formProps   : formPropsReducer,
    displayError: errorReducer
})