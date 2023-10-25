import { useState } from 'react'
import logoPCP from '../images/Logo_evento.png'
import backgroundWeg from '../images/background_weg.png'
import './App.css';
import { salvarPost } from '../services/firestore';


function App() {
  const [item, setItem] = useState({
    email: '',
    id: 1
  });

  async function salvar() {
    if (item.email !== '') {
      salvarPost({ ...item })
      alert(item.email + ' registrado na lista de presentes com sucesso!')
      //window.location.reload()
    } else {
      alert('O E-mail não pode estar vazio!')
    }
    setItem({email:'',id:1})
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logoPCP} className="App-logo" alt="logo" />
        <img src={backgroundWeg} className="image-header" alt="cabeçalho" />

        <div className='bloco'>
          <div className='bloco-left'>
            <h2>BEM VINDO!</h2>
            <h3 style={{ color: "#072446" }}>Favor registrar sua participação abaixo, confirmando sua presença.</h3>
          </div>
          <div className='bloco-right'>
            <h4>Realizar registro com seu email weg.(@weg.net)</h4>
          </div>
        </div>

        <h2>Cronograma Geral do Evento</h2>

        <div className='caixa-cronograma'>
          <h3 style={{ color: 'black' }}>22 de Novembro - Manhã</h3>
          <div className='horarios'>
            <div className='horario'>
              <p>08:30    Abertura</p>
              <p>08:40    Unidade 01</p>
              <p>09:20    Unidade 02</p>
            </div>
            <div className='horario'>
              <p>10:00    Coffe Break</p>
              <p>10:15    Unidade 03</p>
              <p>10:55    Palestra 01</p>
              <p>11:35    Almoço</p>
            </div>
          </div>
        </div>

        <div className='caixa-cronograma'>
          <h3 style={{ color: 'black' }}>22 de Novembro - Tarde</h3>
          <div className='horarios'>
            <div className='horario'>
              <p>08:30    Abertura</p>
              <p>08:40    Unidade 01</p>
              <p>09:20    Unidade 02</p>
            </div>
            <div className='horario'>
              <p>10:00    Coffe Break</p>
              <p>10:15    Unidade 03</p>
              <p>10:55    Palestra 01</p>
              <p>11:35    Almoço</p>
            </div>
          </div>
        </div>

        <h2>Local e Transmissão</h2>
        <div className='caixa-cronograma' style={{ textAlign: 'center', paddingBottom: '0' }}>
          <h2>
            O evento acontecerá no autório do DG e contará com transmissão ao vivo via Microsoft Teams.
          </h2>
        </div>
        <h2>Confirme sua Presença! (insira seu E-mail WEG)</h2>

        <input value={item.email} onChange={event => setItem({ email: event.target.value, id: 1 })} />
        <button onClick={salvar}>Confirmar</button>

      </header>
    </div>
  );
}

export default App;
