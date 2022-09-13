

const Item = ({precio, id, title, thumbnaiUrl}) => {
    return (
        <div>
            <img src={thumbnaiUrl} alt={[title]} />
            <h1>{title}</h1>
            <p>{precio}</p>
        </div>
    )
}

export default Item


