import { useState } from 'react'
import './Notas.css'
import { questionarioCompleto } from '../../services/firestore'
import Estrelas from '../../components/estrelas'
import { Rating } from '@mui/material'

export default function Notas() {
    const [info, setInfo] = useState([{ conhecimento: false, implantados: false, nivel_satisfeito: 0, sugerir: '' }])
    let soma = 0
    let qtd = 0
    for (let nota of info) {
        soma = soma + nota.nivel_satisfeito
        qtd = qtd + 1
    }
    let media = (soma / qtd).toFixed(2)
    questionarioCompleto(setInfo)
    return (
        <div className='App-header'>
            <div className='header'>
                Nota média de satisfação de usuário:
                <div className='avaliacao'> {media}
                    <Rating
                        name="hover-feedback"
                        value={Number(media)}
                        precision={0.1}
                        size='large'
                        max={5}
                    />
                </div>
            </div>
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
