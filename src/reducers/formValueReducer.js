import {FORM_MODIFY, RADIO_MODIFY} from "../actions/type"

export default (state = {}, action) => {
    switch (action.type) {
        case FORM_MODIFY:
            return {...state, ...action.payload}
        case RADIO_MODIFY:
            let level1 = {...state[action.payload.propriety], ...action.payload.formValue[action.payload.propriety]}
            let level2 = level1[action.payload.subPropriety]
            if (level2) {
                Object.getOwnPropertyNames(level1).forEach(key => {
                    if (key !== action.payload.subPropriety) {
                        level1[key] = false
                    }
                })
            }
            return {...state, [action.payload.propriety]: level1}
        default:
            return state;
    }
}