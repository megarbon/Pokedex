import { PokemonContext } from "./PokemonContext"

export const PokemonProvider = ({ children }) => {

    return (
        <PokemonContext.Provider value={{
            numero: 0
        }}>
            {children}
        </PokemonContext.Provider>
    )
}