import React from 'react'
import {
    Switch,
    Route
} from "react-router-dom";
import Home from './Home'
import Play from './page/Play'

export default function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/play" component={Play} />
            </Switch>
        </div>
    )
}
