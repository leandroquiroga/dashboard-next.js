import { PokeCard, ResponseApiPoket, SimplePokemon } from "@/pokemons";
import styles from "../../styles/styles.module.css"


const getPokemons = async ( limit = 20, offset = 0):Promise<SimplePokemon[]> => {
  
  const response: ResponseApiPoket = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json()); 

  const pokemons = response.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  }));

  return pokemons;
};


export default async function PokemonsPage() {

  const pokemons = await getPokemons(151)
  return (
    <div className="flex flex-col p-2">
      <h1 className="text-4xl my-2">Listado de Pokemons</h1>

      <div className={`${styles.pokeCardPage}`}>
        {pokemons.map((pokemon) => (
          <PokeCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}