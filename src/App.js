import React from 'react';
import { BrowserRouter as Routes} from 'react-router-dom';
import Header from './components/Header';
import MainRoutes from './routes';

export default function App() {
  return (
    <Routes>
      <Header/>
      <MainRoutes/>
    </Routes>
  );
}
