import { useState } from "react"

// Faltan agregar: Total

export const BuyList = ({ buy, setPageBuy, clearBuy }) => {
    const [total,setTotal] = useState(0)

    if (buy.length == 0) {
        return <>
            <p>Cargando...</p>
        </>
    }


    return <>
        <button onClick={()=>{ setPageBuy(false) }}>Volver</button>
        <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {buy.map((element,index)=>{
                    return <tr key={index}>
                        <td>{element.title}</td>
                        <td>{element.price}</td>
                    </tr>
                })}
            </tbody>
        </table>

        <h4>Total: {total}</h4>
        <button onClick={()=>{ 
            clearBuy()
            setPageBuy(false)
            alert("Gracias por su compra")
         }}>Finalizar compra</button>
    </>
}