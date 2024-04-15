import React, { Component } from 'react';
import ComA from './ComA'
import idli from '../assets/idli.jpg'


export class New extends Component {
  render() {
    return <div className='new'  style={{ backgroundImage: `url(${idli})` }}>
        <h1><u>Our Upcoming Dishes</u></h1>
        <h1>Dish:{this.props.name}</h1>
        <h1> price:{this.props.price}</h1>
        <h1>Date:{this.props.date}</h1>

       <marquee> <ComA /></marquee>

    </div>;
  }
}
New.defaultProps=
{
    name:"Mexican",
    price:"250",
    date:"shortly"
}

export default New;