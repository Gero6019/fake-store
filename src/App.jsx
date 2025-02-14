import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Products } from './components/Products'
import { BuyList } from './components/BuyList'

//Falta corregir el error del boton del carrito

function App() {
  const [products, setProducts] = useState([])
  const [buy, setBuy] = useState([])
  const [pageBuy, setPageBuy] = useState(false)
  const pageButton = useRef()

  const getProducts = async () => {
    let response = await fetch("https://fakestoreapi.com/products")
    let data = await response.json()
    setProducts(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  const addBuy = (product) => {
    setBuy([...buy, product])
  }

  const clearBuy = ()=>{
    setBuy([])
  }
  
  if (products.length == 0) {
    return <>
      <h1>Falsa Tienda Online</h1>
      <p>Cargando...</p>
    </>
  }

  if (pageBuy == false) {
    return (
      <>
        <h1>Falsa Tienda Online</h1>
        <button ref={pageButton} onClick={()=>{ setPageBuy(true) }}>Carrito: {buy.length}</button>
        <Products products={products} addBuy={addBuy} />
      </>
    )
  }else{
    return <>
      <h1>Falsa Tienda Online</h1>
      <BuyList buy={buy} setPageBuy={setPageBuy} clearBuy={clearBuy} />
    </>
  }
}

export default App
