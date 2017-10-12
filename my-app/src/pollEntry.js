import React from 'react'

export default class PollEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input className="poll-option" placeholder="Option..." onChange={this.handleChange} value={this.state.input}/>
      </div>
    )
  }
}