import {useEffect} from 'react'
import molehill from './assets/molehill.png' /// Well...wherever you stored your moleImg.

function EmptySlot(props){
    
    useEffect(() => {
        // Feel free to adjust this number as you see fit.
        // It is your game to tune!
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}}
            src={molehill} />
        </div>
    )
}

export default EmptySlot