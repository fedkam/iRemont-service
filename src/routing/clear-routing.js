// очень странное решение для генерации sitemap. 
// РАЗОБРАТЬСЯ. найти способ не дублировать файлы (clear-routing и index)
// Дублирую файлы потому что - для sitemap-builder нужен чистый безкомпонетный файл routing или летит ошибка которую неполучается исправить... (ругается на svg и пишет нет реaкт)

import React from 'react'
import { Switch, Route } from 'react-router-dom'


export default (
    <Switch>
        <Route exact path='/' />
        <Route exact path='/repair/old-model' />
        <Route exact path='/modding' />
        <Route exact path='/about-modding' />
        <Route exact path='/about-us' />
        <Route exact path='/repair' />
        <Route exact path='/repair/SE' />
        <Route exact path='/repair/11ProMax' />
        <Route exact path='/repair/11Pro' />
        <Route exact path='/repair/11' />
        <Route exact path='/repair/XSMax' />
        <Route exact path='/repair/XS' />
        <Route exact path='/repair/XR' />
        <Route exact path='/repair/X' />
        <Route exact path='/repair/8Plus' />
        <Route exact path='/repair/8' />
        <Route exact path='/repair/7Plus' />
        <Route exact path='/repair/7' />
        <Route exact path='/repair/6sPlus' />
        <Route exact path='/repair/6s' />
        <Route exact path='/repair/6Plus' />
        <Route exact path='/repair/6' />
    </Switch>
)