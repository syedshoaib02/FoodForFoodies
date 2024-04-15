import React,{createContext} from 'react'
import { ComB } from './ComB';

const BioData=createContext();

export const ComA = () => {
  return (
   <BioData.Provider value={"shortly"}>
<ComB />

   </BioData.Provider>
  )
}
export {BioData};

export default ComA;