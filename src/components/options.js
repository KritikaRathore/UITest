import React, { Component } from 'react';
import Slider from './slider'

class Options extends Component {
    state = {
        xoptions:[
            {
                op:"divop1",
                pckg:"GOLD",
                orgprc:9.99,
                disprc:5.99
            },
            {
                op:"divop2",
                pckg:"SILVER",
                orgprc:5.99,
                disprc:4.99
            },
            {
                op:"divop3",
                pckg:"BASIC",
                orgprc:"",
                disprc:"FREE"
            }
        ]
    }
    render(){
        const renderops = this.state.xoptions.map((option,i) =>
            <div className = {option.op} key={i}>
            <span className="pckg"><b>{option.pckg}</b></span><br/>
            <span className="orgprc">
                <strike>
                {option.op!=='divop3'?
                (this.props.currval==='NZD')?
                (this.props.valplan==='year')?
                '$'+(option.orgprc*1.46*12).toFixed(2):
                '$'+(option.orgprc*1.46).toFixed(2): 
                (this.props.currval==='EUR')?
                (this.props.valplan==='year')?
                '$'+(option.orgprc*0.88*12).toFixed(2):
                '$'+(option.orgprc*0.88).toFixed(2):
                (this.props.valplan==='year')?
                '$'+(option.orgprc*12): 
                '$'+option.orgprc:
                option.orgprc}
                </strike>
            </span>
            <br/>
            <span className="disprc">
                {option.op!=='divop3'?
                (this.props.currval==='NZD')?
                (this.props.valplan==='year')?
                '$'+(option.disprc*1.46*12).toFixed(2):
                '$'+(option.disprc*1.46).toFixed(2): 
                (this.props.currval==='EUR')?
                (this.props.valplan==='year')?
                '$'+(option.disprc*0.88*12).toFixed(2):
                '$'+(option.disprc*0.88).toFixed(2):
                (this.props.valplan==='year')?
                '$'+(option.disprc*12):
                '$'+option.disprc:
                option.disprc}
            </span>
            <br/>
            <span className="curr">
                {option.op!=='divop3'?this.props.currval +' per '+ this.props.valplan :""}
            </span>
            <br/>                
            <button className="btn btn-primary btn-circle btn-xl"><b>CHOOSE</b></button>
        </div>
            )
        return (
            <div className = "ops">
                <Slider/>
                <div className="divops">
                    {renderops}
                </div>
            </div>
        )
    } 
}

export default Options;