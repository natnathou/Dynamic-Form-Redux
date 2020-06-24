import {DISPLAY_ERROR} from "../actions/type"

export default (state = false, action) => {
    switch (action.type) {
        case DISPLAY_ERROR:
            return action.payload
        default:
            return state;
    }
}