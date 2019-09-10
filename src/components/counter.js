import React from 'react'

class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state={
      counter : 0,
    }
  }
  increase = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  decrease = () => {
    if (this.state.counter > 0)
    this.setState ({
      counter: this.state.counter - 1
    })
    else this.setState ({
      counter: this.state.counter - 0
    })
  }
  render(){
    return(
      <div className='container-counter'>
        <h1 className='text-counter'>Counter</h1>
        <h3>{this.state.counter}</h3>
        <button onClick={this.increase} className='plus'>+</button>
        <button onClick={this.decrease} className='minus'>-</button>
      </div>
    )
  }
  
  
}

export default Counter