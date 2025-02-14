export const Products = ({ products })=>{
    return <div className="row">
        {products.map((element,index)=>{
            return <div className="col-4" key={index}>
                <h4>{element.title}</h4>
                <img src={element.image} height={200} width={300} alt="" />
                <p>${element.price}</p>
            </div>
        })}
    </div>
}