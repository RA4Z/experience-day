import estrela_dourada from '../images/estrela_dourada.svg'
import estrela_cinza from '../images/estrela_cinza.svg'
import '../pages/Main/Main.css'

interface Props {
    nivel_satisfeito: number,
}

export default function Estrelas(props: Props) {
    const estrelas = [1, 2, 3, 4, 5]
    return (
        <>
            {estrelas.map(estrela => (
                <img src={props.nivel_satisfeito >= estrela ? estrela_dourada : estrela_cinza}
                    alt='Estrela' className='estrela' />
            ))}
        </>
    )
}