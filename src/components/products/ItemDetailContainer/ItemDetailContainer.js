import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { arregloProductos } from "../../baseDatos/baseDatos";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = ()=>{
    const {productId} = useParams();
    const [item, setItem] = useState({});

    const getItem = (id)=>{
        return new Promise((resolve, reject)=>{
            const item = arregloProductos.find(item=>item.id === parseInt(id));
            resolve(item)
        })
    }

    useEffect(()=>{
        const getProducto = async()=>{
            const producto = await getItem(productId);
            console.log('producto', producto)
            setItem(producto);
        }
        getProducto();
    },[productId])

    console.log('item:', item)
    return(
        <div>
            <p style={{width:"100%", color: "white"}}>item detail container</p>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer