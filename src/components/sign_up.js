import React, { Component } from 'react';

class Sign_up extends Component {
    
    render(){ 
        return (
        <div className="divsignup">
            <div className = "divheading"><b>SIGN UP</b></div>
            <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" className="custom-control-input" 
                        id="defaultInline1" name="inlineDefaultRadiosExample"
                        value="USD"  onChange={this.props.currval}
                        defaultChecked/>
                <label className="custom-control-label" htmlFor="defaultInline1">USD</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" className="custom-control-input" 
                        id="defaultInline2" name="inlineDefaultRadiosExample"
                        value="EUR" onChange={this.props.currval}/>
                <label className="custom-control-label" htmlFor="defaultInline2">EUR</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" className="custom-control-input" 
                        id="defaultInline3" name="inlineDefaultRadiosExample"
                        value="NZD" onChange={this.props.currval}/>
                <label className="custom-control-label" htmlFor="defaultInline3">NZD</label>
            </div>

            <br/>
            <div>
                <label className="lblsub">Monthly</label>
                <label className="switch">
                    <input type="checkbox" onChange={this.props.valplan}/>
                    <span className="slider"></span>
                </label>
                <label className="lblsub">Yearly</label>
                <div>
            </div>
            </div>
        </div> 
        )
    } 
}

export default Sign_up;