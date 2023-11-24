import estrela_dourada from '../images/estrela_dourada.svg'
import estrela_cinza from '../images/estrela_cinza.svg'
import '../pages/Main/Main.css'

interface Props {
    index:number,
    nivel_satisfeito: number,
    dados: {},
    tempHover: number,
    setTempHover: any,
    setDados: any,
    onClick: any,
}

export default function Star(props: Props) {
    return (
        <img src={props.nivel_satisfeito >= props.index || props.tempHover >= props.index ? estrela_dourada : estrela_cinza}
            onMouseOver={() => props.setTempHover(props.index)}
            onMouseOut={() => props.setTempHover(0)}
            alt='Estrela' className='estrela'
            onClick={() => props.setDados({ ...props.dados, nivel_satisfeito: props.index })} />
    )
}