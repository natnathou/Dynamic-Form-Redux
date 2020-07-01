import React from "react"
import {connect} from 'react-redux'
import Form from "../Form/Form"
import buttonField from "../Form/json/buttonField"
import formField from "../Form/json/formField"
import "./App.css"

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Form
                    formField={formField}
                    buttonField={buttonField}
                    nameForm={`formName`}
                />            
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
