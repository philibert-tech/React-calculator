import React, { Component } from 'react';

import Number from '../Numbers/Numbers';
import Operator from '../Operators/Operators';
import Button from '../../components/Buttons/Button';
import Input from '../../components/InputField/InputField';
import classes from './Calculator.module.css';

class Calculator extends Component{

    state={
        equation:""
    }

    appendInDisplayer = (char)=>{
        let equation = this.state.equation
        let newEquation = equation + char;
        
        this.setState({
            equation:newEquation
        })
    }

    clearDisplayer = ()=>{
        this.setState({
            equation:""
        })
    }
    DetermineValue=()=>{
        const equation = this.state.equation;

        try {

            const answer = Function(`'use strict'; return (${equation})`)();
            this.setState({
                equation:answer
            })
            
        } catch (e) {
            if (e instanceof SyntaxError) {
                alert("Please Review your equation");

                this.clearDisplayer();
            }
        }


    }


    // document.onkeydown = function (e) {
    //     var keyCode = e.keyCode;
    //     if(keyCode == 90) {
    //         clicked();
    //     }
    // };


    render(){


        return(
                
            <div className={classes.Calculator}>

            {/* <table>
                <tbody>
                    <tr>
                        <td><Button styling={classNamees.Clear} value="c"  clicked={this.clearDisplayer}/>
                        </td><Input value={this.state.equation}/>
                    </tr>

                    <tr>
                        <Operator value="+" clicked={()=>this.appendInDisplayer("+")}/>
                        <Number value="1" clicked={()=>this.appendInDisplayer("1")}/>
                        <Number value="2" clicked={()=>this.appendInDisplayer("2")}/>
                        <Number value="3" clicked={()=>this.appendInDisplayer("3")}/>
                    </tr>
                    <tr>
                        <Operator value="-" clicked={()=>this.appendInDisplayer("-")}/>
                        <Number value="4" clicked={()=>this.appendInDisplayer("4")}/>
                        <Number value="5" clicked={()=>this.appendInDisplayer("5")}/>
                        <Number value="6" clicked={()=>this.appendInDisplayer("6")}/>
                    </tr>
                    <tr>
                        <Operator value="*" clicked={()=>this.appendInDisplayer("*")}/>
                        <Number value="7" clicked={()=>this.appendInDisplayer("7")}/>
                        <Number value="8" clicked={()=>this.appendInDisplayer("8")}/>
                        <Number value="9" clicked={()=>this.appendInDisplayer("9")}/>
                    </tr>
                    <tr>
                        <Operator value="/" clicked={()=>this.appendInDisplayer("/")}/>
                        <td><Button styling={classes.Dot} value="."  clicked={()=>this.appendInDisplayer(".")}/></td>
                        <Number value="0" clicked={()=>this.appendInDisplayer("0")}/>
                        <td><Button styling={classes.EqualSign} value="="  clicked={this.DetermineValue}/> </td>
                    </tr>
                </tbody>
            </table> */}


<div className={classes.Parent}>
    <div className={classes.Div1}> <Button styling={classes.Clear} value="c"  clicked={this.clearDisplayer}/> </div>
    <div className={classes.Div2}> <Input value={this.state.equation}/> </div>

    <div className={classes.Div3}> <Operator value="+" clicked={()=>this.appendInDisplayer("+")}/> </div>
    <div className={classes.Div4}> <Number value="1" clicked={()=>this.appendInDisplayer("1")}/> </div>
    <div className={classes.Div5}> <Number value="2" clicked={()=>this.appendInDisplayer("2")}/> </div>
    <div className={classes.Div6}> <Number value="3" clicked={()=>this.appendInDisplayer("3")}/> </div>

    <div className={classes.Div7}>  <Operator value="-" clicked={()=>this.appendInDisplayer("-")}/> </div>
    <div className={classes.Div8}>  <Number value="4" clicked={()=>this.appendInDisplayer("4")}/> </div>
    <div className={classes.Div9}>  <Number value="5" clicked={()=>this.appendInDisplayer("5")}/> </div>
    <div className={classes.Div10}> <Number value="6" clicked={()=>this.appendInDisplayer("6")}/> </div>

    <div className={classes.Div11}>  <Operator value="*" clicked={()=>this.appendInDisplayer("*")}/> </div>
    <div className={classes.Div12}>  <Number value="7" clicked={()=>this.appendInDisplayer("7")}/> </div>
    <div className={classes.Div13}>  <Number value="8" clicked={()=>this.appendInDisplayer("8")}/> </div>
    <div className={classes.Div14}>  <Number value="9" clicked={()=>this.appendInDisplayer("9")}/> </div>

    <div className={classes.Div15}>  <Operator value="/" clicked={()=>this.appendInDisplayer("/")}/> </div>
    <div className={classes.Div16}> <Button styling={classes.Dot} value="."  clicked={()=>this.appendInDisplayer(".")}/> </div>
    <div className={classes.Div17}> <Number value="0" clicked={()=>this.appendInDisplayer("0")}/> </div>
    <div className={classes.Div18}> <Button styling={classes.EqualSign} value="="  clicked={this.DetermineValue}/> </div>
</div>

</div>

        );

    };
}

export default Calculator;