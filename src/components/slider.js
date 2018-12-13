import React, { Component } from 'react';

class Slider extends Component {
    state = {
        bulletval:1
    }
    bulletdata = (e) => {
        this.setState({bulletval:e.target.value});
        var rangeBullet = document.getElementById("rs-bullet");
        var bulletPosition = (e.target.value /e.target.max);
        rangeBullet.style.left = (bulletPosition * 650) + "px";
    }
    render(){ 
            return (
                    <div className="container">
                        <div className="range-slider">
                            <span id="rs-bullet" className="rs-label">{this.state.bulletval}</span>
                            <input id="rs-range-line" className="rs-range" type="range" defaultValue="1" min="1" max="200" onChange={this.bulletdata}/>    
                        </div>
                    <div className="box-minmax">
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                    </div>
                </div>                      
        )
    } 
}

export default Slider;
