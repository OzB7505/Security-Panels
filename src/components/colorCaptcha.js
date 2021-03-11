import React, {Component} from 'react';
import './colorCaptcha.css';

class ColorCaptcha extends Component {
  constructor(props) {
    super(props);
    // The state hasn't been fully defined yet. You'll need to finish it.
    this.state = {} 
    // This is the RGB value for pink - the background color of the component.
    this.answerColor = "rgb(255, 192, 203)"
  }

  winning = () => {
    // Write code here that returns true if your color matches the answer
    // color, and returns false if it doesn't. There's a placeholder return
    // already here.
    return false
  }

  recolor = (colorName, e) => {
    // The variable e is passed in by the event, and represents the event itself.
    // The event's .target is the range (aka the slider) input.
    // The target's .value is the current number the slider is at.
    console.log(e.target.value)
    console.log("changing color for: " + colorName)
    // You'll want to update the state so that the color is up to date too.
  }

  render() {
    // Access the state variables.
    const red = this.state.red
    const green = this.state.green
    const blue = this.state.blue
    // Repackage them as a string that we can use for CSS.
    let yourColor = `rgb(${red}, ${green}, ${blue})`
    console.log(yourColor)

    return (
      <div className={"ColorCaptcha " + (this.winning() ? "winning" : "losing")}>
        <h1 className="directions">Match the background color perfectly</h1>
        <div className="hint">
          <h3>Target Total: 650</h3>
          <h3>Your Total: {}</h3>
        </div>
        <div className="colorBlock">
          <div className="colorSliders">
            <input type="range" min="1" max="255" defaultValue={red}
              onChange={(e)=>{this.recolor("red", e)}}
            />
          </div>
          <div className="colorDisplay" style={{"backgroundColor": "rgb(200, 220, 220)"}}></div>
        </div>
      </div>
    );
  }
}

export default ColorCaptcha;
