import { Button } from 'antd';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Order = () => {
    const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts=async()=>{
        const result=await axios.get('http://localhost:4000/api/product')
        const data=result.data;
        setProducts(data.products);
    }
    getProducts()
  },[])

  console.log(products)
  
  return (

    <div className='container'>
        {
           products.map((product,i)=>

           {
            if(product.stock>0 && product.status){

            return    (<div className='card' key={i} style={{background:'white',border:1,borderRadius:'5px',width:'350px',textAlign:'center',opacity:10}}>
            <h2>{product.name}</h2>
            <p>Precio sin iva:{product.price}</p>
            <p>Incluye iva:{ product.isIva ? "Incluye Iva":"No Incluye Iva"}</p>
            <p>Stock:{product.stock}</p>
            <p>Total Precio:{product.isIva ? product.price*0.12 +product.price:product.price }</p>
<Button type="primary">
    Comprar
</Button>
         </div>)
            }
           }
      
           )
        }
    </div>
  )
}
