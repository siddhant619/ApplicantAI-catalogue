import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../contexts/CartContext'
const Navbar = ({itemCount}) => {
    const [cart,setCart,changeItemCount,getTotalItems]=useContext(CartContext);
    return (
        <div className="ui inverted fluid huge menu">
            <Link to="/">
                <a className="inverted header item">E-CommApp</a>
            </Link>
            <div className="right menu">
                <Link to="/cart">
                    <a className="item">
                        MyCart({getTotalItems()}) &nbsp;
                        <i className="cart icon"></i>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
