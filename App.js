import logo from './logo.svg';
import './App.css';
import React from 'react';
import ListItems from './ListItem';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
library.add(faTrash);

class App extends React.Component {
  constructor(props){
    super(props);
      this.state={
        items:[],// simply an array to store the below current item
        currentItem:{
          text:'',
          key:''
        }
    }
    this.handleInput=this.handleInput.bind(this);
    this.addItem=this.addItem.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
    this.setUpdate=this.setUpdate.bind(this);
  }
handleInput(e){
  this.setState({
    currentItem:{
      text:e.target.value,
      key:Date.now()
    }
  })
}
addItem(e){
  e.preventDefault();
  const newItem=this.state.currentItem;
  //console.log(newItem);
  if(newItem.text!==null){
    const newItems=[...this.state.items,newItem]; //parameter, newItem is the current entered item, we add this newItem 
    //in this destructured ...this.state.items array
    this.setState({  //Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects,
      // into distinct variables. That is, we can extract data from arrays and objects and assign them to variables.
      items:newItems,
      currentItem:{
        text:'',
        key:''
      }
      
    })
    console.log(newItems);

  }

}
deleteItem(key){
  const filteredItems=this.state.items.filter(item=>item.key!==key);
  console.log(key);

this.setState({
  items:filteredItems

})
  
}
setUpdate(text,key){
  const items=this.state.items;
  items.map(item=>{
    if(item.key===key){
      item.text=text;
    }
  })
  this.setState({
    items:items
  })
}
  render(){
  return (
    <div className='App'>
    <header>
   <form id="to-do-form">
    <input type="text" placeholder='Enter Items'value={this.state.currentItem.text} onChange={this.handleInput} />
    <button type="submit" onClick={this.addItem}>Add</button>

   </form>
   </header>
   <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
            {/*flowed to props at ListItem.js in ListItems method*/}
   </div>
  );
}}

export default App;
