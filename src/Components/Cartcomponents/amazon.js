import React from 'react'
import data from '../data'
import list from '../data'
import Shopcart from './shopcart'
import '../styles/amazon.css'
const Amazon = () => {
  return (  <div>
      {
        list.map((list)=> (
            // if we don;t use id we get error in console that each list item has unique key id.
            <Shopcart key={list.id} list={list}/> 
         ) )
      }
    </div>
  )
}

export default Amazon
