import React,{useContext} from 'react';
import ReactDOM from 'react-dom';
import {CartContext} from '../contexts/CartContext'

const Modal = props => {
    const [cart,setCart,changeItemCount,getTotalItems]=useContext(CartContext);

    return ReactDOM.createPortal(
        <div  onClick={()=>props.setOpen(!props.open)}  className={`ui inverted dimmer page  modals visible ${props.open?'active':''}`}>
        <div
            onClick={e => e.stopPropagation()}
            className={`ui tiny  standard modal visible ${props.open?'active':''}`}>
            
            <div class="image  content">
                <div class="ui small image">
                    <img src={props.product.imageURL} />
                </div>
                <div class="scrolling description">
                    
                    <div class="ui header">{props.product.name} <br/>&#8377;{props.product.price} </div>
                
                    <p class="ui small header">DESCRIPTION</p>
                    <p>{props.product.description}</p>
                </div>
            </div>
            {/* <div className="header">{props.product.name}</div>
            <div className="content">{props.product.description}</div> */}
            <div class="actions">
                <div class="ui black deny button" onClick={()=>props.setOpen(!props.open)}>
                    Continue shopping
                </div>
                <div class={`ui ${props.inCart?' disabled':''} positive right labeled icon button`}
                    onClick={()=>{
                        if(!props.inCart){
                            
                            setCart(cart=>{
                                props.product.count=1;
                                return( [...cart,props.product] )
                            })
                    }
                    }}
                    >
                    Add to cart
                    <i class="cart icon"></i>
                </div>
        </div>
            {/* <div className="actions">{props.actions}</div> */}
        </div>
        
        </div>,
        document.querySelector('body')
    );
};

export default Modal;
