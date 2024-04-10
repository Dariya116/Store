import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { Favourites } from './pages/Favourites';
import { Navigation } from './components/Navigation';
import { ViewProduct } from './pages/ViewProduct';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ViewProduct />} />
        <Route path="/favorites" element={<Favourites />} />
      </Routes>
    </>
  );
}

export default App;
