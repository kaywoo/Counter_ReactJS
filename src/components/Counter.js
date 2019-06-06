import React, {Component} from "react";
import './Counter.css';
import ButtonsPanel from './ButtonsPanel';
import Step from './Step';

class Counter extends Component {
  
    constructor(props) {
      super(props);
        
        let initValue = 0;
        if ( ! isNaN(this.props.initValue) ) {
          initValue = parseInt(this.props.initValue);
        }

        this.state = {
          counterValue: initValue,
          step: 1
        }
    }
  
    changeValue = () => {
      this.setState((prevValue) => {
        return ({
          counterValue: prevValue.counterValue + this.state.step,
        });
      });
    }

    resetCounter = (resetCounter) => {
      let initValue = 0;

          if (!resetCounter) {
            if (! isNaN(this.props.initValue)){
              initValue = parseInt(this.props.initValue);
            }
          }

          this.setState({
            counterValue: initValue,
          })
    }

    updateStep = value => {
      
        this.setState({
          step: value,
        })
    }

    render() {
      return(
        <div className="counter">Licznik: <span className="value">{this.state.counterValue}</span>
          <ButtonsPanel changeCounterValue={this.changeValue} resetCounterValue={this.resetCounter}/>
          <span className="step">Krok: </span> <Step increase={this.updateStep} />
        </div>
        
      )
    }
  }
export default Counter;