import React from "react";
import '../Collection/collection.scss';
import blue_headphones from '../../img/blue_headphones.svg';
import or_hp from '../../img/or_hp.svg';
import r_hp from '../../img/r_hp.svg';



function Collection() {
    
    return(
        <div className="main">
            <div className="container">
                <div className="text">
                    <h1>Our Latest<br></br>
                    colour collection 2021</h1>
                </div>
                <div className="content">
                    <div className="headphones">
                        <img src={blue_headphones}/>
                        <img src={or_hp}/>
                        <img src={r_hp}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Collection