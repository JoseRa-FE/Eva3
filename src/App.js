import React, { useEffect } from 'react';
import './style.css';

function App() {
  useEffect(() => {
    const contacto = document.querySelector('.Tres-Rayas');
    const header = document.querySelector('.Header');

    const mostrarHeader = () => header.classList.add('show');
    const ocultarHeader = () => header.classList.remove('show');

    if (contacto && header) {
      contacto.addEventListener('mouseenter', mostrarHeader);
      contacto.addEventListener('mouseleave', ocultarHeader);
    }

    return () => {
      if (contacto && header) {
        contacto.removeEventListener('mouseenter', mostrarHeader);
        contacto.removeEventListener('mouseleave', ocultarHeader);
      }
    };
  }, []);

  return (
    <>
      
    </>
  );
}

export default App;