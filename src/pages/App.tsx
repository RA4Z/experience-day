import { useState } from 'react'
import logoPCP from '../images/Logo_evento.png'
import backgroundWeg from '../images/background_weg.png'
import { TextField, Checkbox, FormControlLabel } from '@mui/material';
import './App.css';
import { salvarPost } from '../services/firestore';
import Star from '../components/star';

function App() {
  const [tempHover, setTempHover] = useState(0)
  const [dados, setDados] = useState({
    conhecimento: false,
    implantados: false,
    nivel_satisfeito: 0,
    sugerir: ''
  })

  async function salvar() {
    salvarPost({ ...dados })
    window.scrollTo(0, 0);
    alert('Questionário respondido com sucesso! Muito obrigado!')
    setDados({
      conhecimento: false,
      implantados: false,
      nivel_satisfeito: 0,
      sugerir: ''
    })
  }

  const estrelas = [1, 2, 3, 4, 5]

  return (
    <div className="App ">
      <header className="App-header">
        <img src={logoPCP} className="App-logo" alt="logo" />
        <img src={backgroundWeg} className="image-header" alt="cabeçalho" />

        <h2 style={{ marginTop: '0', textAlign: 'center', paddingTop: 20 }}>Pesquisa de Satisfação!</h2>

        <div className='form-container'>

          <p style={{ color: 'black', textAlign: 'center', fontSize: 20 }}>Qual foi seu nível de satisfação geral com o evento?</p>
          <div className='star-rate'>
            {estrelas.map(estrela => (
              <Star
                key={estrela}
                index={estrela}
                dados={dados}
                nivel_satisfeito={dados.nivel_satisfeito}
                setDados={setDados}
                tempHover={tempHover}
                setTempHover={setTempHover}
                onClick={() => setDados({ ...dados, nivel_satisfeito: 5 })}
              />
            ))}
          </div>

          <FormControlLabel control={<Checkbox checked={dados.conhecimento} onChange={e => setDados({ ...dados, conhecimento: e.target.checked })} />}
            label="Você aprendeu ou enriqueceu seu conhecimento na área de PCP?"
            className='check' />

          <FormControlLabel control={<Checkbox checked={dados.implantados} onChange={e => setDados({ ...dados, implantados: e.target.checked })} />}
            label="Você acredita que os cases apresentados podem ser implantados em sua unidade?"
            className='check' />

          <TextField
            id="input-sugerir"
            value={dados.sugerir}
            onChange={e => setDados({ ...dados, sugerir: e.target.value })}
            label="Sugestões para o próximo evento"
            variant="outlined"
            multiline
            rows={5}
            autoComplete="email"
            className={'input-text'} />

          <button onClick={salvar}>Confirmar</button>

        </div>

        <div className='rodape'>Prototipado por Rogerio Henrique de Oliveira Schneider, Desenvolvido por Robert Aron Zimmermann</div>
      </header>
    </div>
  );
}

export default App;
