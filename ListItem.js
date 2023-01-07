import React from 'react';
import './ListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function ListItems(props){
    const items=props.items;//We use props in React to pass data from one component to another (from a parent component to a child component(s)).
    // Props is just a shorter way of saying properties. They are useful when you want the flow of data in your app to be dynamic.
    const listitems=items.map(item=> {         
        return <div className='list' key={item.key}>
            <p> <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
            <span>
               <FontAwesomeIcon className="faicons" 
               icon="trash" onClick={()=>props.deleteItem(item.key)}></FontAwesomeIcon> 
            </span>
            </p>
        </div>
    })
    return (
        <div>{listitems}</div> //returns the above arrow function
    )
    }
 export default ListItems;