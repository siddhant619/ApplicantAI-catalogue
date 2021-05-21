import React,{useContext,useState} from 'react'
import Product from './Product'
import './Product.css'
import { Multiselect } from 'multiselect-react-dropdown';
import {CartContext} from '../contexts/CartContext'

const products=require('./ProductsList').array;
const brandList=require('./ProductsList').brands;
const categoryList=require('./ProductsList').categories;
console.log(products);
const Products = () => {
    const [cart,setCart,changeItemCount,getTotalItems]=useContext(CartContext);
    const [searchText, setsearchText] = useState('');
    const [brands, setbrands] = useState([]);
    const [categories, setcategories] = useState([]);
    //inCartIds stores all the ids of items that are in the cart

    const inCartIds=cart.map(item=>{
        return(item.id);
    })
    //console.log('in cart',inCartIds);
    const brandOptions=brandList.map((brand,i)=>{
        return(
            {
                name:brand,
                id:i
            }
        )
    });
    const categoryOptions=categoryList.map((category,i)=>{
        console.log(category);
        return(
            {
                name:category,
                id:i
            }
        )
    });
    console.log(searchText,brands,categories)
    const renderedProducts=products.map(product=>{

        if(searchText && !((product.name).toLowerCase()).includes(searchText.toLowerCase())){
            console.log('search not match')
            return null
        }
        if(brands.length && !(brands.map(b=>b.name)).includes(product.brand)){
            console.log('brand not match')
            return null
        }
        if(categories.length && !(categories.map(c=>c.name)).includes(product.category))
            return null
        return(<div key={product.id} className="three wide menu column">
                <Product  product={product} inCart={inCartIds.includes(product.id)} //inCart===true means product already in cart so disable adding it again
                
                />
        </div>
        )
    } );
    //console.log('brands ',brands)
    
    //console.log('BRANDS SELECTED ARE', brands);
    const onSelectBrand=(selectedList, selectedItem)=>{
        console.log(selectedList, selectedItem);
        setbrands(selectedList);
    }
    const onRemoveBrand=(selectedList, selectedItem)=>{
        setbrands(selectedList);
    }
    const onSelectCategory=(selectedList, selectedItem)=>{
        setcategories(selectedList);
    }
    const onRemoveCategory=(selectedList, selectedItem)=>{
        setcategories(selectedList);
    }
    const dropdownStyles={
         chips: { background: "black" }, searchBox: {backgroundColor:"white", paddingLeft:"12px", borderRadius: "5px" } 
    }
    return (
        <>
        <div className="ui stackable grid">
            <div className=" three wide column no-border ">
                <div className="no-border filter">
                    <div class="ui input fluid">
                        <input onChange={(e)=>setsearchText(e.target.value)} value={searchText} type="text" placeholder="Search Products" />
                    </div>
                </div>
                <div className=" no-border filter">
                <Multiselect
                        options={categoryOptions} // Options to display in the dropdown
                        selectedValues={categories} // Preselected value to persist in dropdown
                        onSelect={onSelectCategory} // Function will trigger on select event
                        onRemove={onRemoveCategory} // Function will trigger on remove event
                        displayValue="name" // Property name to display in the dropdown options
                        placeholder="Categories"
                        style={ dropdownStyles}
                        />
                </div>
                <div className=" no-border filter">
                    
                    <Multiselect
                        options={brandOptions} // Options to display in the dropdown
                        selectedValues={brands} // Preselected value to persist in dropdown
                        onSelect={onSelectBrand} // Function will trigger on select event
                        onRemove={onRemoveBrand} // Function will trigger on remove event
                        displayValue="name" // Property name to display in the dropdown options
                        placeholder="Brands"
                        style={ dropdownStyles}
                    />
                </div>
            </div>
            <div className="ui thirteen wide column no-border stackable grid">
                
                {renderedProducts}
               
            </div>
        </div>
        </>
    )
}

export default Products
