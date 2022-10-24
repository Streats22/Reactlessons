import "./PokemonCardWrapper.css";
import PokemonCard from "../components/PokemonCard/PokemonCard";

const PokemonCardWrapper = (props) =>{
    return(
        <section className="pokemonCardWrapper">
            <PokemonCard  pokemonType={["Water", "Ground"]}
                          img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/194.png"
                          ability="Water-Absorb"
                          HP="55"
                          Name="Wooper"
                          updateCounter={props.updateCounter}
            />

            <PokemonCard  pokemonType={["Normal", ]}
                          img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/351.png"
                          ability="forecast"
                          HP="70"
                          Name="Castform"
                          updateCounter={props.updateCounter}
            />

            <PokemonCard  pokemonType={["Dragon"]}
                          img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/621.png"
                          ability="Rough-skin"
                          HP="77"
                          Name="Druddigon"
                          updateCounter={props.updateCounter}
            />

            <PokemonCard  pokemonType={["Poison", "Fighting"]}
                          img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/female/453.png"
                          ability="poison-touch"
                          HP="48"
                          Name="Croagunk"
                          updateCounter={props.updateCounter}
            />

        </section>
    );
}
export default PokemonCardWrapper;