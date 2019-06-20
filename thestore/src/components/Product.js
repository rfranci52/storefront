import React, {Component} from "react"
// import Product from "./"
import styled from "styled-components"
import {Link} from "react-router-dom"
import {ProductConsumer} from "../context"

export default class Product extends Component{
    render(){
        const {id,title,img,price,inCart}=this.props.product;
        return(
            <div>
              <ProductWrapper className="col-9 mx-auto col-md col-lg-3 my-3">
                  <div className="card">
                      <div className="img-container p-5" onClick={console.log('click')}>

                          <Link to="/Productdetails">
                              <img src={img} alt="product" className="card-img-top"/>
                              <h3>{price}</h3>
                          </Link>
                      </div>
                  </div>
              </ProductWrapper>

            </div>
        )
    }
}
const ProductWrapper = styled.div``