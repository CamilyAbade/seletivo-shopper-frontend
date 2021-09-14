import React from 'react';
import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import Checkout from '../pages/checkout/Checkout';
import { Stock } from '../pages/dataBase/Stock';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

const Router = () => {
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' >
                <Home />
            </Route>

            <Route exact path='/products'>
                <Products/>
            </Route>

            <Route exact path='/checkout'>
                <Checkout/>
            </Route>

            <Route exact path='/data-base-stock'>
                <Stock/>
            </Route>

            <Route>
                <Error/>
            </Route>

        </Switch>
    </BrowserRouter>

    )
}

export default Router;
