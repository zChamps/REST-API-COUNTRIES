//2 - Criar a pagina de search
import React from 'react'
import { useLocation } from 'react-router-dom';

const Search = () => {
  const location = useLocation();
  
  // Obtendo o caminho da URL
  const path = location.pathname;

  // Obtendo a URL completa usando window.location.href
  const url = window.location.href;

  console.log('Caminho da URL:', path);
  console.log('URL completa:', url);
  console.log(url);
  return (
    <div>Serch</div>
  )
}

export default Search