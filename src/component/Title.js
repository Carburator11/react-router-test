import React, { Component } from 'react';

export default class Title extends Component{
  constructor(props){
    super(props);
    this.state = {    }
  }

render(){
  return(
      <h4 className = 'title'>
        { JSON.stringify(this.props.title) }


      </h4>
  )}



}
