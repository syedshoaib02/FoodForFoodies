import React,{useReducer} from 'react'

export const Cart = () => {
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
    <div className='cart'>
       
        
        <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
            {state}
        <button  onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>
        
        </div>
        
  )
}
export default Cart;
