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
    <div className="App ">
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
              <p aria-label='Abertura do evento'>08:30:00    Abertura</p>
              <p aria-label='Agendamento de Inspeções após pré teste'>08:40:00    WEN JGS</p>
              <p aria-label='Reduzir o tempo de tratativa das mensagens de exceção'>09:00:00    WEN SZO</p>
              <p aria-label='F-WM (Factory - Warehouse Management)'>09:20:00    WMO</p>
            </div>
            <div className='horario'>
              <p aria-label='ATO (Assembly to Order)'>09:40:00    WMO</p>
              <p aria-label='Coffee Break'>10:00:00    COFFEE BREAK</p>
              <p aria-label='Planejamento e Programação no Departamento de Tintas Pó'>10:15:00    WTI</p>
              <p aria-label='Evolução do PCP Dentro da WEG'>10:55:00    Palestra 01</p>
            </div>
          </div>
        </div>

        <div className='caixa-cronograma'>
          <h3 style={{ color: 'black' }}>22 de Novembro - Tarde</h3>
          <div className='horarios'>
            <div className='horario'>
              <p aria-label='Acompanhamento e execução das atividades do bloco K'>13:00:00    WDS</p>
              <p aria-label='Otimização nos Projetos de Embalagens'>13:20:00    WMO</p>
              <p aria-label='Melhorias nos Processos de Partes e Peças'>13:40:00    WMO</p>
              <p aria-label='Indicadores Gerenciais de Drives e Controls'>14:00:00    WAU</p>
              <p aria-label='Dashboard de Controle da Previsão de Vendas'>14:20:00    WAU</p>
            </div>
            <div className='horario'>
              <p aria-label='Coffee Break'>14:40:00    COFFEE BREAK</p>
              <p aria-label='Processo S&OP WTD'>14:55:00    WTD</p>
              <p aria-label='Aplicação do APS na Programação de Transformadores'>15:15:00    WTD</p>
              <p aria-label='Autoconhecimento e Trabalho em Equipe'>15:15:00    Palestra 02</p>
              <p aria-label='Encerramento do evento'>16:40:00    Encerramento</p>
            </div>
          </div>
        </div>

        <h2>Local e Transmissão</h2>
        <div className='caixa-cronograma' style={{ textAlign: 'center', paddingBottom: '0', marginBottom: '60px' }}>
          <h2>
            O evento será transmitido via 
            <a href='https://teams.microsoft.com/l/meetup-join/19%3ameeting_M2JiOWUxNTEtMWE1MS00YWZkLTk0YTItMmMwZDA1ZmU4MmIx%40thread.v2/0?context=%7b%22Tid%22%3a%22886666a6-a8d2-4604-a002-95b622cb7e18%22%2c%22Oid%22%3a%220a266f1d-de89-44f8-82fd-351179f321d4%22%7d'> Microsoft Teams.</a>
          </h2>
        </div>
        <div className='rodape'>Prototipado por Rogerio Henrique de Oliveira Schneider, Desenvolvido por Robert Aron Zimmermann</div>
      </header>
    </div>
  );
}

export default App;
