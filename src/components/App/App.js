import React from "react"
import {connect} from 'react-redux'
import Form from "../Form/Form"
import "./App.css"
import buttonJson from "../Form/json/buttonField"
import formJson from "../Form/json/formField"
const nameForm="form"
const buttonField = buttonJson[nameForm]
const formField = formJson[nameForm]

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Form formField={formField} buttonField={buttonField} nameForm={nameForm}/>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return state
}

export default connect(
    mapStateToProps
)(App)
