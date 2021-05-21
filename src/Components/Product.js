import React,{useState,useContext} from 'react'
import './Product.css'
import Modal from './Modal'
import {CartContext} from '../contexts/CartContext'

const Product = ({product,inCart}) => {
    const [cart,setCart,changeItemCount,getTotalItems]=useContext(CartContext);
    const [open, setOpen] = React.useState(false);
    return (<div className="ui gray raised card">
                <div className="ui img-container image">
                    <img  src={product.imageURL} className="img content" />
                    <div class="middle">
                        <div onClick={()=>setOpen(!open)} class="ui primary button ">View</div>
                    </div>
                </div>
                <div className="content">
                    <div className="flex">
                        <div>{product.name}</div>
                        <div>
                        <i onClick={()=>{
                            if(!inCart){
                                setCart(cart=>{
                                    product.count=1;
                                    return( [...cart,product] )
                                })
                        }
                        }} 
                        className={`cart ${inCart?'green disabled':''} plus icon`}></i>
                        </div>
                        
                    </div>
                    <p className="ui ">&#8377;{product.price}</p>
                </div>
                {/* <div className="extra content flex">
                    <div>{product.description}</div>
                
                </div> */}

                <Modal
                    product={product}
                    open={open} setOpen={setOpen}
                     inCart={inCart}
                    onDismiss={() => console.log('dismiss')}
                />
        </div>
    )
}

export default Product
