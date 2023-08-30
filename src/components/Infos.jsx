import { React } from 'react';
import photo1 from '../utils/images/Perfil.jpeg';

export default function Infos() {
  return (
    <div className="infos">
      <h1>Maurício Passos</h1>
      <h2>26 anos</h2>
      <h2>Salvador - Bahia</h2>
      <h2>Desenvolvedor Web</h2>
      <img src={photo1} alt="Foto de perfil" />
    </div>
  );
}
