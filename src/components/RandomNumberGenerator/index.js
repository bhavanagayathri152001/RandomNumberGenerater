import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumberCount: 0}

  onClickGenerateButton = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({randomNumberCount: randomNumber})
  }

  render() {
    const {randomNumberCount} = this.state
    return (
      <div className="bg-container">
        <div className="random-card-container">
          <h1 className="random-number-heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="generate-button"
            onClick={this.onClickGenerateButton}
          >
            Generate
          </button>
          <p className="random-number">{randomNumberCount}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
