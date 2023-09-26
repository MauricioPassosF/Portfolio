import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Contacts from './Contacts';

export default function Header() {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <nav className="flex flex-row justify-between h-20  max-w-full bg-indigo-800 sticky top-0">
      <div>
        <NavLink to="/">Sobre Mim</NavLink>
        <NavLink to="/projetos">Projetos</NavLink>
        <button type="button">Codigo Fonte</button>
        <button type="button">Projetos</button>
        <button type="button">Curriculo</button>
        <button onClick={() => setShowContacts(!showContacts)} type="button">
          Contatos
        </button>
        {showContacts && <Contacts />}
      </div>
      <button type="button">Darkmode</button>
    </nav>
  );
}
