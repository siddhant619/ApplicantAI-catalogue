import React,{useContext,useState} from 'react'
import {CartContext} from '../../contexts/CartContext'

const Summary = () => {
    const [cart,setCart]=useContext(CartContext);
    const [showMessage,setshowMessage]=useState(false);
    const getTotalAmount=()=>{
        let totalPrice=0;
        cart.map(item=>{
            totalPrice+=item.price*item.count;
        });

        return(totalPrice);
    }
    const renderedList=cart.map(item=>{
        console.log(item);
        return(
            <div key={item.id}  className="item">
                <div className="right floated content ">
                    Qty: {item.count}&nbsp;&nbsp;&nbsp;&nbsp; &#8377;{item.count*item.price}
                </div>
                <div class="header content ">
                    {item.name}
                </div>
            </div>
        )
    })
    return (
        <div>
            <div className="ui hidden section divider"></div>
            <div className="ui one stackable column centered page grid" style={{border:"0px solid black"}}>
                <div className="column nine wide" style={{backgroundColor:"white"}}>
                    <div className="ui center aligned header">Order Summary</div>
                    <div className="ui  divided list">
                    {renderedList}
                    </div>
                    {showMessage?
                        <div className="ui center large aligned green header">
                            <i className="check icon"></i>
                            Payment Successful
                        </div>
                    :null}
                    <button onClick={()=>{
                        setCart([])
                        setshowMessage(true)
                    }} className={`ui ${getTotalAmount()===0?'disabled':''} primary fluid button`}>Pay &nbsp;&nbsp; &#8377;{getTotalAmount()}</button>

                </div>
            </div>
        </div>
    )
}

export default Summary
