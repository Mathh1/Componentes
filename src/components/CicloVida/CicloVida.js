import { useEffect } from 'react'

const CicloVida = ({numero}) => {
    useEffect(() => {
        console.log('');
        return () => {
            console.log('componente desmontado')
        }
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