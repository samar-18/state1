import React, { Component } from 'react'

class Livecycle extends Component {
    state={
        count:0
    }

    componentDidMount=()=>{
        setInterval(()=>{
          this.setState({count:this.state.count+1})
        },1000)
      }
    render() {
        return (
            <div>
               <h1>{this.state.count}<span>s</span></h1>
            </div>
        )
    }
}

export default Livecycle;