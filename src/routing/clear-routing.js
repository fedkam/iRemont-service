// очень странное решение для генерации sitemap. 
// РАЗОБРАТЬСЯ. найти способ не дублировать файлы (clear-routing и index)
// Дублирую файлы потому что - для sitemap-builder нужен чистый безкомпонетный файл routing или летит ошибка которую неполучается исправить... (ругается на svg и пишет нет реaкт)

import React from 'react'
import { Switch, Route } from 'react-router-dom'


export default (
    <Switch>
        <Route exact path='/' />
        <Route exact path='/repair' />
        <Route exact path='/repair/old-model' />
        <Route exact path='/repair/:id' />
        <Route exact path='/modding' />
        <Route exact path='/about-modding' />
        <Route exact path='/about-us' />
    </Switch>
)