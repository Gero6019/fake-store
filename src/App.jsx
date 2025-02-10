import { useEffect, useState } from 'react'
import './App.css'
import { Products } from './components/Products'

function App() {
  const [products, setProducts] = useState([])

  const getProducts = async ()=>{
    let response = await fetch("https://fakestoreapi.com/products")
    let data = await response.json()
    setProducts(data)
  }

  useEffect(()=>{
    getProducts()
  },[])

  const getNameProducts = ()=>{
      return <ul>
      <li>{products[6].title}</li>
    </ul>
  }

  if(products.length == 0){
    return <>
      <h1>Falsa Tienda Online</h1>
      <p>Cargando...</p>
    </>
  }

  return (
    <>
      <h1>Falsa Tienda Online</h1>
      <button onClick={()=>{console.log(products)}}>Ver productos</button>
      {getNameProducts()}
      <Products product={products[4]} />
    </>
  )
}

export default App
