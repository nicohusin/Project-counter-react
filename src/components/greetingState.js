import React from 'react'

class GreetingState extends React.Component{
  constructor(props){
    super(props)
    this.state={
      toggle:true
    };
  }
  changeName = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle

    }));
    
  }
  render(){
    return(
      <div onClick= {this.changeName} className='App'>
        <h1>Hallo dari {this.state.toggle ? "nico" : "husin"}</h1>
      </div>
    )
  }
}

export default GreetingState