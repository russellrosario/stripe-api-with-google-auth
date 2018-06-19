import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from './Header'
import Landing from './Landing'
import Dashboard from './Dashboard'
import AddUserNew from './addUsers/AddUserNew'

class App extends Component {
    componentDidMount() {
        this.props.fetchUser()
    }

    render() {
        return (
            <div className="container" >
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/addUsers" component={Dashboard} />
                        <Route path="/addUsers/new" component={AddUserNew} />

                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App)