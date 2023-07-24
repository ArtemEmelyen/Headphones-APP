import React from "react";
import '../Boxing/boxing.scss';
import box from '../../img/box.png';
import arrow from '../../img/arrow.svg';

function Boxing(){
    return(
        <div className="boxing">
            <div className="container">
                <div className="image">
                    <img src={box}></img>
                </div>
                <div className="text">
                        <h1>Whatever you get<br>
                        </br> in the box
                        </h1>
                    <div className="components">
                        <div className="arrow">
                            <img src={arrow}></img>
                            <img src={arrow}></img>
                            <img src={arrow}></img>
                            <img src={arrow}></img>
                        </div>
                        <div className="texts">
                            <p>5A Charger</p>
                            <h2>Extra battery</h2>
                            <h3>Sophisticated bag</h3>
                            <h4>User manual guide</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Boxing