import React, { Component } from 'react'
import EnComponent from './Encomponent'

class Clickcounter extends Component {
constructor(props) {
  super(props)

  this.state = {count:0}
}
inc=()=>{this.setState({count:this.state.count+1})}
  render() {
    return (
      <div>
      {this.props.name};
      <button onClick={this.inc}>Click {this.state.count}</button>
      </div>
    )
  }
}
export default EnComponent(Clickcounter);
