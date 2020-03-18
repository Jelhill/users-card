import React, { Fragment } from 'react';
import Cards from "../Components/Cards"


const CardPack = ({data, players, filteredName}) => {       
        return (
            <Fragment>
                <Cards data={data} players={players} filteredName={filteredName}/>
            </Fragment>
            
          )
}


export default CardPack
