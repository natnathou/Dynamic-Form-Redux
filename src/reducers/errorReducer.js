import {DISPLAY_ERROR} from "../actions/type"

//if display all error (before that we send our form)
export default (state = false, action) => {
    switch (action.type) {
        case DISPLAY_ERROR:
            return action.payload
        default:
            return state;
    }
}