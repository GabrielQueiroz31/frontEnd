const prompt = require('prompt-sync')();

//Api pokemon
async function consultarPokemon() {
    let pokemon = prompt("Digite o nome do pokemon: ");
    pokemon = pokemon.trim();

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const resposta = await fetch(url);

    if (!resposta.ok) {
        console.log("Erro na consulta");
        return;
    }
    const dados = await resposta.json();
    console.log("Dados do Pokemon: ");
    console.log(`Nome: ${dados.name}`);
    console.log(`Altura: ${dados.height}m`);
    console.log(`Peso: ${dados.weight}Kg`);
    console.log("Tipo: ", dados.types[0].type.name);
}
consultarPokemon();