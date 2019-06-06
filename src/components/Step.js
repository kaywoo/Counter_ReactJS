import React from 'react';
import './Step.css';

class Step extends React.Component {

  increment = () => {
    this.props.increase(parseFloat(this._inputStep.value)
  )}

  render() {


    return (
      <input ref={(data) => {this._inputStep = data} } onChange={this.increment} type="number" min={1}/> 
      ); 
  }
  

}

export default Step;