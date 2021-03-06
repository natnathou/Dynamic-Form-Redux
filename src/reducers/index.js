import {combineReducers}           from 'redux'
import formValueReducer            from './formValueReducer'
import formPropsReducer            from './formPropsReducer'
import formErrorReducer            from "./formErrorReducer"
import responseErrorMessageReducer from "./responseErrorMessageReducer"


export default combineReducers({
    formValue           : formValueReducer,
    formProps           : formPropsReducer,
    displayError        : formErrorReducer,
    responseErrorMessage: responseErrorMessageReducer
})