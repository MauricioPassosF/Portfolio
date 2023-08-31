import { React } from 'react';
import photo1 from '../utils/images/Perfil.jpeg';

export default function Infos() {
  return (
    <div className="flex flex-row justify-between items-center bg-indigo-500 w-5/6 mx-auto h-40 rounded-md">
      <div className="flex flex-col items-center">
        <h1 className="h-2/4 text-4xl font-bold">Maurício Passos</h1>
        <div className="flex flex-row gap-x-4">
          <h2 className="h-1/4">26 anos</h2>
          <h2 className="h-1/4">Salvador - Bahia</h2>
          <h2 className="h-1/4">Desenvolvedor Web</h2>
        </div>
      </div>
      <img
        src={photo1}
        alt="Foto de perfil"
        className="h-3/4 rounded-full border-4 border-indigo-500/300"
      />
    </div>
  );
}
