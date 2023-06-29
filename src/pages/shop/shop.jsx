import React from 'react'
import { PRODS } from '../../products'
import { Product } from './product'
import "./shop.css"

export const Shop = () => {
  return (
    <div className='products'>{PRODS.map((product) => (
    <Product data={product} />
    ))}</div>
  )
}
