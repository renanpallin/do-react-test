import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';

const api = process.env.REACT_APP_API_URL;

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function getMessage() {
      try {
        const { data } = await axios.get(api);
        setMessage(data.message);
      } catch (error) {
        console.error('Algo deu errado na API');
        setMessage('deu ruim =(');
      }
    }
    getMessage();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {message}
        <Button
          style={{
            marginTop: '20px',
            backgroundColor: '#69e21d',
            color: 'black',
          }}
          variant="contained"
          color="success"
        >
          Inscreva-se!
        </Button>
      </header>
      <footer>@renanpallin.dev</footer>
    </div>
  );
}

export default App;
