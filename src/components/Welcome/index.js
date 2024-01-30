import {Component} from 'react'

class Welcome extends Component {
  state = {
    subscription: 'Subscribe',
  }

  subscribe = () => {
    this.setState(prevState => ({
      subscription: 'Subsrcibed',
    }))
  }

  subscribed = () => {
    this.setState(prevState => ({
      subscription: 'Subsrcibe',
    }))
  }

  render() {
    const {subscription, isSubscribed} = this.state

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank You! Happy Learning</p>
        <button type="button" onClick={this.subscribe}>
          {subscription}
        </button>
        <button type="button" onClick={this.subscribed}>
          {subscription}
        </button>
      </div>
    )
  }
}

export default Welcome
