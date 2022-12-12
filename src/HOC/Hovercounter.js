import React, { Component } from 'react'

export default class Hovercounter extends Component {
    constructor(props){
        super(props)
        this.state={count:0}
    }
    inc=()=>{this.setState({count:this.state.count+1})}
  render() {
    return (
      <div>
            <h2 onMouseEnter={this.inc}>Hover Me {this.state.count}</h2>
      </div>
    )
  }
}
