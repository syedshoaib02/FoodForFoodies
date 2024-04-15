import React,{useState,useEffect} from 'react';

 export const Customers = () => {

     const[users,setUsers]=useState([])
     const getUsers=async()=>
     {
         const response=await fetch("https://breakingbadapi.com/api/characters");
          
         setUsers(await response.json());
     }

     useEffect(()=>
     {
         getUsers();
     },[])

  return <div>
    <center>  <h1 >Our Customers</h1></center>
      <div class="container">
          <div class="row">
              {
                  users.map((user)=>
                  {
                      return(
                          <div   className="customers">
                              <div >
             <img  src={user.img} width={400} height={250} />
                  <h5 >{user.name}</h5>
                    <p >{user.occupation}</p>
                    </div>
                    </div>
                              
                      )
                  })
              }

          </div>
         
          


      </div>
  </div>;
};

export default Customers;