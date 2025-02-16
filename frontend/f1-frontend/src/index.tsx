import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TeamDetail from './TeamDetail/TeamDetail'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { TeamProvider } from './TeamContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TeamProvider>
      <Router>
        <Routes>
          <Route path='/' element={<App/>}></Route>
          <Route path='/:name' element={<TeamDetail/>}></Route>
        </Routes>
      </Router>
    </TeamProvider>
  </React.StrictMode>
);
