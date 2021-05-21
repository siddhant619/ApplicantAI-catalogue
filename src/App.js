import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Products from './Components/Products'
import Navbar from './Components/Navbar'
import Cart from './Components/Cart/Cart'
import Summary from './Components/Summary/Summary'
import {CartProvider} from './contexts/CartContext'
const App = () => {
    return (<>
        <CartProvider>
            <Router>
                <Navbar  />
                <div className="ui ">
                    <Switch>
                        <Route exact path="/">
                            <Products  />
                        </Route>
                        <Route path="/cart">
                            <Cart  />
                        </Route>
                        <Route path="/summary">
                            <Summary />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </CartProvider>
        </>
    )
}

export default App
