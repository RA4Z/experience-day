import { useState } from 'react'
import './Notas.css'
import { questionarioCompleto } from '../../services/firestore'
import Estrelas from '../../components/estrelas'

export default function Notas() {
    const [info, setInfo] = useState([{ conhecimento: false, implantados: false, nivel_satisfeito: 0, sugerir: '' }])
    questionarioCompleto(setInfo)
    return (
        <div className='App-header'>
            {info.map(info => (
                <div className='card'>
                    <p>Nível de satisfação geral com o evento</p>
                    <div className='estrelas-alinhadas'>
                        <Estrelas nivel_satisfeito={info.nivel_satisfeito} />
                    </div>
                    <p style={info.conhecimento ? { color: 'green' } : { color: 'red' }}>{info.conhecimento ? 'O evento foi enriquecedor em questão de conhecimentos na área de PCP' : 'O evento não ajudou nos conhecimentos em PCP'}</p>
                    <p style={info.implantados ? { color: 'green' } : { color: 'red' }}>{info.implantados ? 'Cases poderão ser implantados na unidade' : 'Nenhum case ajudará na unidade'}</p>
                    <p>{info.sugerir ? info.sugerir : 'Não há sugestões para o próximo evento'}</p>
                </div>
            ))}
        </div>
    )
}
