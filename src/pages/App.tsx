import { useState } from 'react'
import logoPCP from '../images/Logo_evento.png'
import backgroundWeg from '../images/background_weg.png'
import './App.css';
import { salvarPost } from '../services/firestore';


function App() {
  const [item, setItem] = useState({
    email: ''
  });

  const validateEmail = (emailAddress: string) => {
    let validate = /\S+@\S+\.\S+/;
    return validate.test(emailAddress)
  }

  async function salvar() {
    if (item.email !== '') {
      if (validateEmail(item.email)) {
        salvarPost({ ...item })
        window.scrollTo(0, 0);
        alert(item.email + ' registrado na lista de presentes com sucesso!')
        setItem({ email: '' })
      } else {
        alert(item.email + ' não é um endereço de E-mail válido!')
      }
    } else {
      alert('O E-mail não pode estar vazio!')
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logoPCP} className="App-logo" alt="logo" />
        <img src={backgroundWeg} className="image-header" alt="cabeçalho" />

        <h1 style={{ marginBottom: '0' }}>BEM VINDO!</h1>
        <h2 style={{ marginTop: '0' }}>Favor registrar seu e-mail WEG para confirmar sua presença.</h2>

        <input value={item.email} onChange={event => setItem({ email: event.target.value })} />
        <button onClick={salvar}>Confirmar</button>

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
        <div className='caixa-cronograma' style={{ textAlign: 'center', paddingBottom: '0', marginBottom: '60px' }}>
          <h2>
            O evento será transmitido via Microsoft Teams.
          </h2>
        </div>
        <div className='rodape'>Prototipado por Rogerio Henrique de Oliveira Schneider, Desenvolvido por Robert Aron Zimmermann</div>
      </header>
    </div>
  );
}

export default App;
