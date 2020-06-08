import React from 'react';
import "./Product.css";

function Product() {
    return (
    <div className="product-container">
      <div className="page-head">
        <h1>Kids</h1>
        <hr></hr>
      </div>
        <div><img src="../../assets/images/kids/1.jpg" alt="kids product" width="300" height="200" /></div>
        <div><img src="../../assets/images/kids/2.jpg" alt="kids product" width="300" height="200"  /></div> 
        <div><img src="../../assets/images/kids/3.jpg" alt="kids product" width="300" height="200" /></div>
      <div className="man">
        <h1 style={{textAlign:"right"}}>Man</h1>
        <hr></hr>
        <div className="man-product">
        <div><img src="../../assets/images/Male/1.jpg" alt="male product" width="300" height="200" /></div>
        <div><img src="../../assets/images/Male/2.jpg" alt="male product" width="300" height="200"  /></div> 
        <div><img src="../../assets/images/Male/3.jpg" alt="male product" width="300" height="200" /></div>
        </div>
        </div>
        <div className="women-product-header">
          <h1>Women</h1>
          <hr></hr>
          <div className="women-product">
          <div><img src="../../assets/images/Fmale/1.jpg" alt="male product" width="300" height="200" /></div>
        <div><img src="../../assets/images/Fmale/2.jpg" alt="male product" width="300" height="200"  /></div> 
        <div><img src="../../assets/images/Fmale/3.jpg" alt="male product" width="300" height="200" /></div> 
          </div>
          
        </div>
      </div>
      
    );
  }
  
  export default Product;