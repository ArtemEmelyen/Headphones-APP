import React from "react";
import '../Feature/feature.scss';
import yellow from '../../img/yellow_hp.png';
import battery from '../../img/battery.svg';
import bluetooth from '../../img/bluetooth.svg';
import micro from '../../img/micro.svg';



function Feature() {
    return(
        <div className="feature">
            <div className="container">
                <div className="block">
                    <div className="text">
                        <h1>Good headphones<br>
                        </br> and loud music is all<br>
                        </br> you need</h1>
                    </div>
                    <div className="components">
                        <div className="icons">
                            <div className="battery">
                                <img src={battery}></img>
                            </div>
                            <div className="bluetooth">
                                <img src={bluetooth}></img>
                            </div>
                            <div className="micro">
                                <img src={micro}></img>
                            </div>
                        </div>
                        <div className="text_icons">
                            <div className="text1">
                                <h2>Battery</h2>
                                <p>Battery 6.2V-AAC codec</p>
                                <a href="Learn More">Learn More</a>
                            </div>
                            <div className="text2">
                                <h2>Battery</h2>
                                <p>Battery 6.2V-AAC codec</p>
                                <a href="Learn More">Learn More</a>
                            </div>
                            <div className="text3">
                                <h2>Battery</h2>
                                <p>Battery 6.2V-AAC codec</p>
                                <a href="Learn More">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <img src={yellow}></img>
                </div>
            </div>
        </div>
    )  
}
export default Feature