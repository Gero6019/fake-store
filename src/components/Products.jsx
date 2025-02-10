export const Products = ({ product })=>{
    return <>
        <img src={product.image} alt="" />
        <h3>{product.title}</h3>
    </>
}