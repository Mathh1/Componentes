import './styles.css';

const Item = ({precio, id, title, thumbnaiUrl}) => {
    return (
        <div className="card">
            <img src={thumbnaiUrl} alt={[title]} />
            <h3>{title}</h3>
            <p>{precio}</p>
        </div>
    )
}

export default Item


