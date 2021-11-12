import './App.css';

import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Inscreva-se no canal, meu parça!
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
