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
        <Route exact path='/repair/se' />
        <Route exact path='/repair/11promax' />
        <Route exact path='/repair/11pro' />
        <Route exact path='/repair/11' />
        <Route exact path='/repair/xsmax' />
        <Route exact path='/repair/xs' />
        <Route exact path='/repair/xr' />
        <Route exact path='/repair/x' />
        <Route exact path='/repair/8plus' />
        <Route exact path='/repair/8' />
        <Route exact path='/repair/7plus' />
        <Route exact path='/repair/7' />
        <Route exact path='/repair/6splus' />
        <Route exact path='/repair/6s' />
        <Route exact path='/repair/6plus' />
        <Route exact path='/repair/6' />
    </Switch>
)