
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input, Select } from 'antd';
import Swal from "sweetalert2"
const { Option } = Select;
export const Product = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [cities, setCities] = useState([]);
    const [send, setPost] = useState(false);
    useEffect(() => {
        const getProvinces = async () => {
            const result = await axios.get('http://localhost:4000/api/prov')
            const data = result.data;
            setProvinces(data.province);
        }
        getProvinces()
    }, [])

    useEffect(() => {
        const getCities = async () => {
            const result = await axios.get('http://localhost:4000/api/city')
            const data = result.data;
            setCities(data.city);
        }
        getCities()
    }, [])

    useEffect(() => {
        const getProducts = async () => {
            const result = await axios.get('http://localhost:4000/api/product')
            const data = result.data;
            setProducts(data.products);
        }
        getProducts()
    }, [send])
    useEffect(() => {
        const getCategory = async () => {
            const result = await axios.get('http://localhost:4000/api/category')
            const data = result.data;
            setCategory(data.category);
        }
        getCategory()
    }, [])
   const onFinish=async(value)=>{

const ressp=await axios.post('http://localhost:4000/api/product',value)
 
Swal.fire('El producto se registro correctamente')
setPost(true);
setPost(false);
   }

   const deleteProducto=async(product)=>{
    const ressp=await axios.delete('http://localhost:4000/api/product',product)
    Swal.fire('El producto se elimino correctamente')
    setPost(true);
    setPost(false);
   }

    return (

        <div className=''>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Nombre del Producto"
                    name="name"
                    rules={[{ required: true, message: 'Ingrese el nombre del producto!' }]}
                >
                    <Input />

                </Form.Item>
                <Form.Item
                    label="Categoria"
                    name="category"

                >
                    <Select d style={{ width: 120 }}>
                        {
                            category.map((cat, i) => {
                                return <Option key={i} value={cat.name}>{cat.name}</Option>
                            })
                        }

                    </Select>

                </Form.Item>


                <Form.Item
                    label="Provincia"
                    name="province"

                >
                    <Select d style={{ width: 120 }}>
                        {
                            provinces.map((prov, i) => {
                                return <Option key={i} value={prov.name}>{prov.name}</Option>
                            })
                        }

                    </Select>

                </Form.Item>

                <Form.Item
                    label="Ciudad"
                    name="city"

                >
                    <Select d style={{ width: 120 }}>
                        {
                            cities.map((city, i) => {
                                return <Option key={i} value={city.name}>{city.name}</Option>
                            })
                        }

                    </Select>

                </Form.Item>

                <Form.Item name="isIva" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Tiene Iva:</Checkbox>
      </Form.Item>
      <Form.Item name="isPromo" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Hay Promocio:</Checkbox>
      </Form.Item>
      <Form.Item name="status" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Disponible:</Checkbox>
      </Form.Item>

                <Form.Item
                    label="Precio del producto"
                    name="price"
                    
                >
                    <Input type='number' />

                </Form.Item>

                <Form.Item
                    label="Descuento"
                    name="discount"
                 
                >
                    <Input type='number' />

                </Form.Item>

                <Form.Item
                    label="Stock"
                    name="stock"
                   
                >
                    <Input type='number' />

                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <div>


                <table>
                    <thead>
                        <tr>

                            <td>Nombre</td>
                            <td>Categoria</td>
                            <td>Precio</td>
                            <td>Stock</td>
                            <td>Accion</td>

                        </tr>
                    </thead>
                    <tbody>


                        {

                            products.map((product, i) =>
                                <tr key={i}>
                                    <td>{product.name}</td>
                                    <td>{product.category}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stock}</td>
                                    <td><Button type='default' onClick={()=>deleteProducto(product)} >Eliminar</Button></td>
                                </tr>
                            )


                        }


                    </tbody>
                </table>
            </div>

        </div>
    )
}
