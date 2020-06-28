import React from 'react'
import {connect} from "react-redux"
import buttonField from "../json/buttonField"
import formField from "../json/formField"
import {formSend, formReset} from "../../../actions/actions"

export class Button extends React.Component {

// check which button we will render after that we map our json
    renderInput = json => json.map((data, index) => {
        switch (data.function) {

            case "send":
                return <button
                    className={data.color}
                    key={index}
                    onClick={this.handleSendClick}>
                    {data.value}
                </button>
            case "reset":
                return <button
                    className={data.color}
                    key={index}
                    onClick={this.handleResetClick}>
                    {data.value}
                </button>

            default:
                return <button
                    className={data.color}
                    key={index}>
                    {data.value}
                </button>


        }

    })

    // we clcik on send we will send our form
    handleSendClick = async (event) => {
        this.props.formSend()
    }

    // we clcik on send we will cancel our form
    handleResetClick = async (event) => {
        this.props.formReset(formField)
    }

    render() {
        return (
            <div className="Button">
                {this.renderInput(buttonField)}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {form: state.form}
};
export default connect(
    mapStateToProps, {formSend, formReset}
)(Button)
