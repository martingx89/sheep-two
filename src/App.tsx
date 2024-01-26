import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Rules from './components/pages/rules/Rules';
import NotFound from './components/pages/404/NotFound';

const App = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/rules' element={<Rules />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default App;
