import { React } from 'react';
import './App.css';
// eslint-disable-next-line object-curly-newline
import { Route, Routes, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';

function Root() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/projetos" element={<ProjectsPage />} />
    </Routes>
  );
}

const router = createBrowserRouter([{ path: '*', Component: Root }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
