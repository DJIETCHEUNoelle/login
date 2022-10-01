import './App.css';
import { useState } from 'react';
import Main from './View/Main/main';

function App() {
  const [open, setOpen] = useState(true)
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
