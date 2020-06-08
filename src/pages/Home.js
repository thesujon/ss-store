import React from 'react';
import './Home.css';

class Home extends React.Component {
    render () {
        return (
        <div>
            <img className="main-img" src="../../assets/images/main_img.jpg" alt="main-img"/>
           <br/>
            <div className="text-container">
            <p>We are an apparel sourcing(agent) company in Bangladesh, sourcing apparels and fashion accessories for our buyers across the world. We are committed to providing the best quality product with the best possible quality garment and deals with all sorts of apparel products in its categories with highly competitive prices. Best quality as committed and Customers satisfaction are our main goals. We are regularly selling T-Shirt, Polo Shirts. Denim pant, Jeans, Jackets, Tank top, Trousers, Sweaters, Boxer, Brief, Socks, and Children wear.
We have the flexibility to meet the trend in all aspects of design, quality, and other developments which are most desired by today’s fashion conscious market.
Also whether it is promotional wear or work wear, we are producing custom-made garments in Bangladesh. From design concept to final delivery, we assist you in every step of the way to make sure your products are of the highest quality, delivered on time at a price that is right. And these are not mere words but an M-Apparels promise. We want to prove that Bangladesh can be your best choice for buying.</p>
<br />
<hr></hr>
            </div>
            <div className="products-display">
              <p>Our Products</p>
              <img className="p.img" src="../../assets/images/pimg_1.png" alt="home img" />
              <img className="p.img" src="../../assets/images/pimg_2.jpg" alt="home img"/>
              <img className="p.img" src="../../assets/images/pimg_3.png" alt="home img"/>
              <img className="p.img" src="../../assets/images/pimg_4.png" alt="home img"/>
              <img className="p.img" src="../../assets/images/pimg_5.png" alt="home img"/>
              <img className="p.img" src="../../assets/images/pimg_3.png" alt="home img"/>
              <img className="p.img" src="../../assets/images/pimg_2.jpg" alt="home img"/>
            </div>

            </div>
        );
    }
}

export default Home;