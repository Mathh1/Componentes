import Item from "../Item/Item"


const ItemList = ({ itemList }) => {

    return (
        <>
            {
            itemList.map(( producto ) => {
                return (
                    <Item 
                        key={producto.id}
                        title={producto.title}
                        precio={producto.precio}
                        thumbnaiUrl={producto.thumbnaiUrl}
                        />
                );
            })}
        </>
    );
};

export default ItemList