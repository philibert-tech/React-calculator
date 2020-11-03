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
    
    /* the componentDidMount function is used after all component 
    are loaded so as to add the eventListener "keydown"*/
    componentDidMount(){   
        document.addEventListener("keydown", this.handleKeypadEntry);
    }

    /*appendInDisplayer is used to add the characters into the inputfield*/
    appendInDisplayer = (input) => {
        let equation = this.state.equation
        let newEquation = equation + input;
        
        this.setState({
            equation:newEquation
        })
    }

     /*clearDisplayer is used to clear the inputfield*/
    clearDisplayer = () => {
        this.setState({
            equation:""
        })
    }

    /*determineValue is used to determine the result of the equation in the input field*/
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

        /*looping through the entries and assigning*/
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
                    {keyPad}
                </div>                 
            </div>

        );

    };
}

export default Calculator;