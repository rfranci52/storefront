import React ,{Component}from "react"
import {storeProducts,detailProduct} from "./AllProducts"


const ProductContext = React.createContext();


class ProductProvider extends Component{
    state={
        products:storeProducts,
        detail: detailProduct
    }
    handleDetail=()=>{
        console.log("in detail")
    }
    addToCart=()=>{
        console.log("in cart")
    }
    render(){
        return(
            <ProductContext.Provider value={{...this.state,handleDetail:this.handleDetail,addToCart:this.addToCart}}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer=ProductContext.Consumer;

export {ProductProvider,ProductConsumer}