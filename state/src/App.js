import React, { Component } from 'react'
import Profile from './Profile'

export default class App extends Component {
 
 constructor(props){
          super (props)
          this.state={
            Photo:<img src='' alt=''/>,
            name:"amirr",
            lastName:"miled",
            profession:"developper",
            show:false,


          }
        }
 show=()=>{
this.setState({show:!this.state.show})
 }
  render() {
    return (
      <div>
        { this.state.show ? <Profile name={this.state.name} lastName={this.state.lastName} profession={this.state.profession} /> : null }
        <button onClick={this.show}>Click me </button>
      </div>
    )
  }
}
