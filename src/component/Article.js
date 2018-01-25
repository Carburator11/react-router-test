import React, { Component } from 'react';


export default class Article extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }

    render(){
        return(
            <div className = 'article'>
              <h2>Article :  { JSON.stringify(this.props.data.title) }</h2>
              { JSON.stringify(this.props.data.description) }<br/>
              <img src = { this.props.data.urlToImage } alt= 'image' width= '200px'/>
            </div>
        )
    }
}
