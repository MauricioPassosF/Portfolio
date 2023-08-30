import { React } from 'react';
import './App.css';
// eslint-disable-next-line object-curly-newline
import { Route, Routes, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

const router = createBrowserRouter([{ path: '*', Component: Root }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
