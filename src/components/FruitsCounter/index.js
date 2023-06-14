import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  mangoCount = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  bananaCount = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    console.log(mango)
    return (
      <div className="first-container">
        <div className="second-container">
          <h1 className="heading">
            Bob ate<span className="count"> {mango} </span>mangoes
            <span className="count"> {banana} </span>bananas
          </h1>
          <div className="fruits-container">
            <div className="each-fruit-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button className="btn" type="button" onClick={this.mangoCount}>
                Eat Mango
              </button>
            </div>
            <div className="each-fruit-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button className="btn" type="button" onClick={this.bananaCount}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
