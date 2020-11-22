import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {
    OfferPage,
    RepairPage,
    OldModelPage,
    ModdingPage,
    SparePartsPage,
    AboutUsPage,
    PricePage,
    ErrorPage
} from '../containers/pages'


const Routing = () => (
    <Switch>
        <Route exact path='/' component={OfferPage} />
        <Route exact path='/repair' component={RepairPage} />
        <Route exact path='/repair/old-model' component={OldModelPage} />
        <Route exact path='/repair/:id' component={PricePage} />
        <Route exact path='/modding' component={ModdingPage} />
        <Route exact path='/about-modding' component={SparePartsPage} />
        <Route exact path='/about-us' component={AboutUsPage} />
        <Route path='*' render={() => (<ErrorPage subtitle={'404 Страница не найдена.'} />)} />
    </Switch>
)

export default Routing
