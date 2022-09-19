
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList";
import { arregloProductos } from "../../baseDatos/baseDatos";


const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([]);

    // const getItems = () => {
    //     fetch('https://pokeapi.co/api/v2/pokemon?limit=9&offset=0')
    //     .then((response)=>{
    //         return response.json()
    //     })
    //     .then((data)=>{
    //         console.log(data)
    //     })
    // }
    // useEffect(() => {
    //     getItems();
    // }, [])

    const getData = new Promise ((resolve, reject)=> {
        setTimeout(() => {
            resolve(arregloProductos)
        }, 2000)
    })


    useEffect(() => {
        getData.then((result) => {
            setItems(result);
            console.log(result)
        })
    }, [])

    return (
        <> 
        {
            items.length > 0 ? (
                <ItemList itemList={items} />
            ) : (
                <div>Loading...</div>
            )
        }
        </>
    );
};

export default ItemListContainer