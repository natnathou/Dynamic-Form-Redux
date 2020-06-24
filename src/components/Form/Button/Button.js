import React from 'react'
import {connect} from "react-redux"
import buttonField from "../json/buttonField"
import formField from "../json/formField"
import {formSend, formReset} from "../../../actions/actions"

export class Button extends React.Component {


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

    handleSendClick = async (event) => {
        this.props.formSend()
    }

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
