import React from "react";
import '../Collection/collection.scss';
import blue_headphones from '../../img/blue_headphones.png';
import or_hp from '../../img/or_hp.svg';
import r_hp from '../../img/r_hp.svg';
import prev from '../../img/prev.svg';
import next from '../../img/next.svg';

function Collection() {
    
    return(
        <div className="collection">
            <div className="container">
                <div className="text">
                    <p>Our Latest <br/>
                    colour collection 2021</p>
                </div>
                <div className="collection_content">
                    <img src={prev}/>
                    <div className="collection_img">
                        <img src={r_hp}/>
                        <img src={blue_headphones}/>
                        <img src={or_hp}/>
                    </div>
                    <img src={next}/>
                </div>
            </div>
        </div>
        
    )
}
export default Collection