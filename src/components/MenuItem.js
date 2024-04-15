import React,{useReducer} from 'react'


 export function MenuItem({ image, name, price }) {


    const initialState=0;
const reducer=(state,action)=>
{
 console.log(state,action);
 
 if(action.type==='INCREMENT')
 {
     return state+1;
 }

 if(action.type==='DECREMENT')
 {
     return state-1;
 }
 return state;
}

    const [state,dispatch]=useReducer(reducer,initialState)


  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ₹{price} </p>
      <div className='cart'>
       
        
       <button onClick={()=>dispatch({type:'INCREMENT'})}>Add</button>&nbsp;
           {state}&nbsp;
       <button  onClick={()=>dispatch({type:'DECREMENT'})}>Remove</button>
       
       </div>
      
    </div>
  );
}


export default MenuItem;
