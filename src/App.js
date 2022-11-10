import './App.css';
import { useState } from 'react';
import Main from './View/Main/main';
import Terms from './Component/terms';

import {BrowserRouter, Route,  Routes} from 'react-router-dom';

function App() {
  const [open, setOpen] = useState(true)
  return (
    <div>
    
      <BrowserRouter>

      <Routes>
      <Route path='/terms' element={<Terms/>}/>
      <Route path='/'  element={<Main/>}/>
      </Routes>

      </BrowserRouter>

    </div>
      );
}

export default App;
