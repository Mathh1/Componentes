import { useEffect } from 'react'

const CicloVida = ({numero}) => {
    useEffect(() => {
        console.log('');
    }, []);

    useEffect(() => {
        console.log('');
    }, [numero]);

    console.log('')
    return (
        <div>
            <h2>Vamos en el numero {numero}</h2>
        </div>
    );
};

export default CicloVida