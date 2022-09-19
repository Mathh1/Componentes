

export const ItemDetail = ({item})=>{
    return(
        <div >
            <p style={{width: "100%"}}>item detail</p>
            <div >
                <img src={item.thumbnaiUrl} alt={item.title}/>
            </div>
            <div >
                <h4>{item.title}</h4>
                <h5>$ {item.precio}</h5>
            </div>
        </div>
    )
}