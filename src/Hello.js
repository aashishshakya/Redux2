import React from 'react';

export default class Todos extends React.Component{
  constructor(){
    super()
    this.clickMe = this.clickMe.bind(this)
    this.addList = this.addList.bind(this)
  }
  clickMe(){
    this.props.onClick()
   // console.log('./'+this.props.val)
  }
  addList(){
    
    console.log(this.props.onAddTodo(document.getElementById('inp').value))
    console.log(this.props.val.list)
  }
  render(){
    return(<div>
    <input type='text' id='inp'/>
    <button onClick={this.clickMe}>Click</button>
    <button onClick={this.addList}>Add</button>
    <ul>
    {this.props.val.list.map((item,i)=>{
      return(
      <li key={i}>{item.val}</li>
      )})}
    </ul>
    </div>)
  }
}
