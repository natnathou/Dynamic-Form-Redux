import _ from "lodash"
import {
    FORM_PROPS_INITIALIZE,
    FORM_PROPS_RADIO_INITIALIZE,
    FORM_PROPS_MODIFY,
    FORM_PROPS_RADIO_MODIFY,
    FORM_PROPS_RADIO_MODIFY_PROPRIETY
} from "../actions/type"

export default (state = {}, action) => {
    switch (action.type) {
        case FORM_PROPS_INITIALIZE:
            return {...state, ...action.payload}
        case FORM_PROPS_RADIO_INITIALIZE:
            return {
                ...state,
                [action.payload.propriety]: {...state[action.payload.propriety], ...action.payload.formValue[action.payload.propriety]}
            }
        case FORM_PROPS_MODIFY:
            return {
                ...state,
                [_.keys(action.payload)]: {...state[_.keys(action.payload)], ...action.payload[_.keys(action.payload)]}
            }
        case FORM_PROPS_RADIO_MODIFY:
            let propriety    = _.keys(action.payload)
            let subPropriety = _.keys(action.payload[propriety])
            let obj          = {...state[propriety][subPropriety], ...action.payload[propriety][subPropriety]}
            let newObj       = {[subPropriety]: obj}
            return {...state, [propriety]: {...state[propriety], ...newObj}}
        case FORM_PROPS_RADIO_MODIFY_PROPRIETY:
            let key      = _.keys(action.payload)
            let objError = action.payload[_.keys(action.payload)]
            return {...state, [key]: {...state[key], ...objError}}
        default:
            return state;
    }
}