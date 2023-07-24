import React from "react";
import '../Product/product.scss';
import pink from '../../img/pink.png';
import blue from '../../img/blue.png';
import green from '../../img/green.png';
import stars from '../../img/stars.png';

function Product(){
    return(
        <div className="product">
            <div className="container">
                <div className="text">
                    <h1>Our Latest Product</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis<br></br> nunc ipsum aliquam, ante. </p>
                </div>
            </div>
            <div className="content">
                <div className="pink">
                    <div className="image_pink">
                        <img src={pink}></img>
                    </div>
                    <button className="trash1">basket</button>
                    <div className="stars1">
                        <img src={stars}></img>
                        <p>Pink Headphones</p>
                        <span>4.99</span>
                        <h4>$ 256</h4>
                    </div>
                </div>
                <div className="blue">
                    <div className="image_blue">
                        <img src={blue}></img>
                    </div>
                    <button className="trash2">basket</button>
                    <div className="stars2">
                        <img src={stars}></img>
                        <p>Pink Headphones</p>
                        <span>4.99</span>
                        <h4>$ 256</h4>
                    </div>
                </div>
                <div className="green">
                    <div className="image_green">
                        <img src={green}></img>
                    </div>
                    <button className="trash3">basket</button>
                    <div className="stars3">
                        <img src={stars}></img>
                        <p>Pink Headphones</p>
                        <span>4.99</span>
                        <h4>$ 256</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product