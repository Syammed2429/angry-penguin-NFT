import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Faq } from '../Faq/Faq'
import Layout from '../Layout'
import { Rarity } from '../Rarity/Rarity'
import { Roadmap } from '../Roadmap/Roadmap'
import { Team } from '../Team/Team'

const Routers = () => {

    return (
        <div>
            <Switch>
                <Route exact path="/" component={Layout}></Route>
                <Route path="/rariry" component={Rarity}></Route>
                {/* <Route path="/roadmap" component={Roadmap}></Route> */}
                <Route path="/faq" component={Faq}></Route>
                <Route path="/team" component={Team}></Route>
                <Route>
                    404 Not Found
                </Route>
            </Switch>
        </div>
    )
}

export { Routers }
