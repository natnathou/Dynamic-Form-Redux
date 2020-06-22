import {FORM_MODIFY,RADIO_MODIFY} from "./type"

export const formModify=(formValue)=>{
    return {type: FORM_MODIFY, payload: formValue}
}

export const radioModify=(formValue, propriety, subPropriety)=>{
    return {type: RADIO_MODIFY, payload: {formValue, propriety, subPropriety}}
}