import React from 'react'
import {Orbitals} from 'react-spinners-css';
import useFetch from '../../../hooks/useFetch';
function Djs() {
  const {loading,result} = useFetch('https://pokeapi.co/api/v2/pokemon');
  console.log(result.results);



  // useEffect(() => {
  //   const getPokemons = async () => {
  //     const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
  //     const data = await resp.json();
  //     setPokemons(data.results);
  //   }
  //   getPokemons();
  // }, []);// [] --> componentDidMount en clases

  return (
    <section>
      <h1>DJs residentes</h1>
      {loading?<><Orbitals color="#2e2836" size={1000} /><br/>Cargando...</>:result.results.map((pokemon) => <h3>{pokemon.name}</h3>)}

    </section>

  );
}

export default Djs