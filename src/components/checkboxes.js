import React, {Component} from 'react'
import './checkboxes.css'

class Checkboxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checks: [false, true, false, false ]
    }
    this.answerKey = [true, false, true, true]
  }
  
  handleClickForBox = (i) => {
    // This first line exists just for debugging purposes.
    console.log("You clicked on box #" + i)
    // Start by accessing the current array of checks.
    const arrayOfChecks = this.state.checks
    console.log(this.answerKey)
       console.log(arrayOfChecks)
    // Do whatever logic you'll need to do to update that box.
    
    if (arrayOfChecks[i] === true) {
        arrayOfChecks[i] = false
        this.setState({checks: arrayOfChecks})

    } else  {
        arrayOfChecks[i] = true
        this.setState({checks: arrayOfChecks})

    }
    // (Remember to use the this.setState(newState) method afterwards!)
  }

  countTrue = (arrayOfChecks) => {
    // You'll want to write a method that counts the number of "true" in your
    // state's "checks" array, so that you can tell the user what their
    // checkmarks are. Right now there's a placeholder return value: "##".
    let howMany = 0
    for (let i = 0; i < arrayOfChecks.length; i++){
        if (arrayOfChecks[i] === true)
        howMany++
        
    }    
    return howMany
  }

  winning = () => {
    // You'll need to write a function that returns false, unless every item
    // in your array matches the answer key. Right now there's a placeholder
    // return value of false.
    if (this.state.checks === this.answerKey) {
        return true
    } else {
        return false
    }
    
  }

  render() {
    // To increase readability we are unpacking the checks array here.
    const arrayOfChecks = this.state.checks
    return (
      <div className={"Checkboxes " + (this.winning(arrayOfChecks) ? "winning" : "losing")}>
        <h1 className="directions">Check only the correct boxes</h1>
        <div className="hint">
          <h3>Target Sum: 3</h3>
          <h3>Your Sum: {this.countTrue(arrayOfChecks)}</h3>
        </div>
        <div className="checkGrid">
          <div className={"checkbox " + arrayOfChecks[0]} onClick={()=>this.handleClickForBox(0)}/>
          <div className={"checkbox " + arrayOfChecks[1]} onClick={()=>this.handleClickForBox(1)}/>
          <div className={"checkbox " + arrayOfChecks[2]} onClick={()=>this.handleClickForBox(2)}/>
          <div className={"checkbox " + arrayOfChecks[3]} onClick={()=>this.handleClickForBox(3)}/>
        </div>
      </div>
    )
  }
}

export default Checkboxes;
