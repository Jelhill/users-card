import React from 'react';
import Cards from "../Components/Cards"


const CardPack = ({data, players, filteredName}) => {       
        return (
            <div>
                <Cards data={data} players={players} filteredName={filteredName}/>
            </div>
            
        )
}


export default CardPack
