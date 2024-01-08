export default function RandomPokemon() {
  const num = Math.floor(Math.random() * 151) + 1;
  return (
    <div>
      <h1>Pokemon #{num}</h1>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png`}
        alt=""
      />
    </div>
  );
}
