import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstCard: true,
    lastCard: true,
  }

  render() {
    const {firstCard} = this.state
    const {lastCard} = this.state

    firstButtonText = () => {
      console.log('Hi First')
    }

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <button
            onClick={this.firstButtonText}
            type="button"
            className="firstButton"
          >
            Show/Hide FirstName
          </button>
          <button type="button" className="lastButton">
            Show/Hide LastName
          </button>
        </div>
      </div>
    )
  }
}
export default ShowHide
