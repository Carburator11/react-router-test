import React, { Component } from 'react';

export default class FullText extends Component{
  constructor(props){
    super(props);
    this.state = {    }
  }

render(){
  return(
      <p className = 'fullText'>
        { JSON.stringify(this.props.text) }
      </p>
  )}



}
