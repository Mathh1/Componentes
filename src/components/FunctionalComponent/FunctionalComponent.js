import './styles.css';

const FunctionalComponent = ({ titulo }) => {
    console.log(titulo);
    return (
        <div>
            <h1>{titulo}</h1>
        </div>
    );
};

export default FunctionalComponent;