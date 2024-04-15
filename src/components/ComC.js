import React,{useContext} from 'react'
import { BioData } from './ComA'

export const ComC = () => {
    const context=useContext(BioData)
  return <h1 className="ComA">Available {context}!!!!!</h1>
}
