import axios from "axios";
import Header from "./Header";
import { useEffect, useState } from "react";

export default function ProductList(){
    const [productList,setProductList] = useState([]);
    useEffect(()=>{
        axios.get("https://dummyjson.com/products")
        .then(response=>{
            console.log(response);
            setProductList(response.data.products);
        }).catch(err=>{
            console.log(err);
        })
    },[]);
    return <>
      <Header/>
      <table className="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Price</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            {productList.map((product,index)=><tr key={index}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
            </tr>)}
        </tbody>
      </table>
    </>
}