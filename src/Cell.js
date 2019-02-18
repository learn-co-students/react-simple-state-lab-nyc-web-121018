import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.value
    }
    // console.log(this.state.color);
  }

  handleClick = () => {
    this.setState({
      color: '#333'
    })
  }

  render() {
    return (
      <div className='cell' style={{backgroundColor: this.state.color}} onClick={this.handleClick}>

      </div>
    )
  }


}
