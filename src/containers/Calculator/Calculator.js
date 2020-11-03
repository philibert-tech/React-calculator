import React, { Component } from 'react';
import Numbers from '../../components/Numbers/Numbers';
import Operators from '../../components/Operators/Operators';
import Button from '../../components/Buttons/Button';
import Input from '../../components/InputField/InputField';
import classes from './Calculator.module.css';

class Calculator extends Component{

    state = {
        equation:'',
        entries:['c', ' ', '+', '1', '2', '3', '-', '4', '5', '6', '*', '7', '8', '9', '/', '.', '0', '=','%', '(' ,')' ] 
 
    }

    handleKeypadEntry = (event) => {

        switch(event.key) {
            case "Backspace":
            case "Delete":
                event.returnValue = false
                this.clearDisplayer();
                break;

            case "Enter":
                event.returnValue = false
                this.determineValue();
                break;

            case"0":
            case"1":
            case"2":
            case"3":
            case"4":
            case"5":
            case"6":
            case"7":
            case"8":
            case"9":
            case"/":
            case"*":
            case"-":
            case"+":
            case".":
            case"%":
            case"(":
            case")":
            this.appendInDisplayer(event.key);

                break;

            default:           
                break;
        }
    }
    
    // componentWillMount deprecated in React 16.3
    componentDidMount(){
        document.addEventListener("keydown", this.handleKeypadEntry);
    }

    appendInDisplayer = (char) => {
        let equation = this.state.equation
        let newEquation = equation + char;
        
        this.setState({
            equation:newEquation
        })
    }

    clearDisplayer = () => {
        this.setState({
            equation:""
        })
    }

    determineValue = () => {
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


    render(){
        let count = 0;
        let input = null;

        const keyPad = [...this.state.entries]
        .map(entry =>{
            count ++;
            let DivName = {name:"classes.Div3"};

            switch(entry){
              
                case"c":
                    input = <div key={count} className={classes.Div1}> <Button styling={classes.Clear} value={entry}  clicked={this.clearDisplayer}/> </div>
                    break;                   

                case" ":
                    input =  <div key={count} className={classes.Div2}> <Input value={this.state.equation} /> </div>
                    break;

                case"+":
                case"-":
                case"*":
                case"/":
                case"%":
                    input =   <div key={count} className={DivName}> <Operators value={entry} clicked={()=>this.appendInDisplayer(entry)}/> </div>
                    break;

                case".":
                case"(":
                case")":
                    input =   <div key={count} className={DivName}> <Button styling={classes.Special} value={entry}  clicked={()=>this.appendInDisplayer(entry)}/> </div>
                    break;

                case"=":
                    input =   <div key={count} className={classes.Div18}> <Button styling={classes.EqualSign} value={entry}  clicked={this.determineValue}/> </div>
                    break;    
                    
                default:
                    input =   <div key={count} className={DivName}> <Numbers value={entry} clicked={()=>this.appendInDisplayer(entry)}/> </div>
                    break;              
            }
                
            return (input);

        });
    
        return(
            

            <div className={classes.Calculator}>


                <div className={classes.Parent}>
                    {/* <div className={classes.Div1}> <Button styling={classes.Clear} value="c"  clicked={this.clearDisplayer}/> </div>
                    <div className={classes.Div2}> <Input value={this.state.equation} /> </div>

                    <div className={classes.Div3}> <Operators value="+" clicked={()=>this.appendInDisplayer("+")}/> </div>
                    <div className={classes.Div4}> <Numbers value="1" clicked={()=>this.appendInDisplayer("1")}/> </div>
                    <div className={classes.Div5}> <Numbers value="2" clicked={()=>this.appendInDisplayer("2")}/> </div>
                    <div className={classes.Div6}> <Numbers value="3" clicked={()=>this.appendInDisplayer("3")}/> </div>

                    <div className={classes.Div7}> <Operators value="-" clicked={()=>this.appendInDisplayer("-")}/> </div>
                    <div className={classes.Div8}> <Numbers value="4" clicked={()=>this.appendInDisplayer("4")}/> </div>
                    <div className={classes.Div9}> <Numbers value="5" clicked={()=>this.appendInDisplayer("5")}/> </div>
                    <div className={classes.Div10}> <Numbers value="6" clicked={()=>this.appendInDisplayer("6")}/> </div>

                    <div className={classes.Div11}> <Operators value="*" clicked={()=>this.appendInDisplayer("*")}/> </div>
                    <div className={classes.Div12}> <Numbers value="7" clicked={()=>this.appendInDisplayer("7")}/> </div>
                    <div className={classes.Div13}> <Numbers value="8" clicked={()=>this.appendInDisplayer("8")}/> </div>
                    <div className={classes.Div14}> <Numbers value="9" clicked={()=>this.appendInDisplayer("9")}/> </div>

                    <div className={classes.Div15}> <Operators value="/" clicked={()=>this.appendInDisplayer("/")}/> </div>
                    <div className={classes.Div16}> <Button styling={classes.Special} value="."  clicked={()=>this.appendInDisplayer(".")}/> </div>
                    <div className={classes.Div17}> <Numbers value="0" clicked={()=>this.appendInDisplayer("0")}/> </div>
                    <div className={classes.Div18}> <Button styling={classes.EqualSign} value="="  clicked={this.DetermineValue}/> </div>

                    <div className={classes.Div19}> <Operators value="%" clicked={()=>this.appendInDisplayer("%")}/> </div>
                    <div className={classes.Div20}> <Button styling={classes.Special} value="("  clicked={()=>this.appendInDisplayer("(")}/> </div>
                    <div className={classes.Div21}> <Button styling={classes.Special} value=")"  clicked={()=>this.appendInDisplayer(")")}/> </div> */}

                    {keyPad}
                </div>

                

 
            </div>

        );

    };
}

export default Calculator;