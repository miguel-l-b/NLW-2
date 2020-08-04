import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/Landing'

function Route() {
    <BrowserRouter>
        <Route path='/' component={Landing} />
        <Route path='/study' component={TecherList} />
    </BrowserRouter>
}