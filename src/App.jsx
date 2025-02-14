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


  if(products.length == 0){
    return <>
      <h1>Falsa Tienda Online</h1>
      <p>Cargando...</p>
    </>
  }

  return (
    <>
      <h1>Falsa Tienda Online</h1>
      <Products products={products} />
    </>
  )
}

export default App
