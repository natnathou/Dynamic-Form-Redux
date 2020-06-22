import React     from "react"
import {connect} from 'react-redux'
import Form      from "../Form/Form"
import "./App.css"

class App extends React.Component {

    render(){
        return (
        <div className = "App">
            <Form/>
        </div>
        )
    }
}


const mapStateToProps = state =>{
    return state
}

export default connect(
    mapStateToProps
)(App)
