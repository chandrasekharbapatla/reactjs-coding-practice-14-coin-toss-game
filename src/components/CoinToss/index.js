// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    head: 0,
    tail: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  clickOnTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const result = tossResult === 0 ? 'heads' : 'tails'
    const url =
      result === 'heads'
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    if (result === 'heads') {
      this.setState(prevState => ({head: prevState.head + 1, imageUrl: url}))
    } else if (result === 'tails') {
      this.setState(prevState => ({tail: prevState.tail + 1, imageUrl: url}))
    }
  }

  render() {
    const {head, tail, imageUrl} = this.state
    const total = head + tail

    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="text">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="toss-img" />
          <button
            className="toss-button"
            type="button"
            onClick={this.clickOnTossCoin}
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result-text">Total: {total}</p>
            <p className="result-text">Heads: {head}</p>
            <p className="result-text">Tails: {tail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
