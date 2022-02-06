
// Just one example
import Mole from './Mole'
import React, { useState } from "react" 
import EmptySlot from './EmptySlot'
function MoleContainer(props){

    let [displayMole, setDisplayMole] = useState(false)
    const bop = () => {
        props.setScore(props.score + 1)
        setDisplayMole(false)
    }

    return (
        <div>

            {
                displayMole==true 
                ?
                <Mole handleClick={bop} setDisplayMole={setDisplayMole}/>
                :
                <EmptySlot setDisplayMole={setDisplayMole}/>
            }
        
        </div>
    )


}

export default MoleContainer