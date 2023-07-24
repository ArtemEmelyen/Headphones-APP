import React, { useState } from "react";
import '../MainBlock/mainblock.scss'
import logo from '../../img/logo.svg';
import search from '../../img/search.svg';
import buys from '../../img/buys.svg';
import people from '../../img/people.svg';
import burger from '../../img/burger.svg';
import headphones from '../../img/headphones.png';

function MainBlock() {

    
    return(
        <div className="main">
            <div className="container">
                <header className="header">
                    <img src={logo}/>
                    <div className="links">
                        <img src={search}/>
                        <div className="line"></div>
                        <img src={buys}/>
                        <div className="line"></div>
                        <img src={people}/>
                    </div>
                    <img src={burger}/>
                </header>
                <div className="content">
                    <div className="headphones">
                        <img src={headphones}/>
                    </div>
                    <div className="text">
                        <p>Hear it. Feel it</p>
                        <h1>
                            Move<br></br>
                            with the<br></br>
                            music
                        </h1>
                        <div className="price">
                            <p>$ 435</p>
                            <div className="line"></div>
                            <s><span>$ 465</span></s>
                        </div>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBlock;