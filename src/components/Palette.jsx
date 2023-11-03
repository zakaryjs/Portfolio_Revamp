import { FaPaintbrush } from 'react-icons/fa6';
import '../styles/Palette.css'
import { ColourContext } from '../contexts/ColourContext'
import { useContext, useEffect } from 'react';
import { FaCircle } from 'react-icons/fa';

export default function Palette() {

    const {colour} = useContext(ColourContext)
    const {setColour} = useContext(ColourContext)

    const {hidden} = useContext(ColourContext)
    const {setHidden} = useContext(ColourContext)

    const style = {color: colour}

    const paletteToggle = () => {
        setHidden((hidden) => !hidden)
    }

    function SetRed() {
        setColour("#ff0000")
    }

    function SetBlue() {
        setColour("#00FFFF")
    }

    function SetYellow() {
        setColour("#f5e218")
    }

    useEffect(() => {
        console.log(hidden)
    }, [hidden])



    return (
        <div id='paletteDiv'>
            <FaPaintbrush id='paintBrush' style={style} onClick={paletteToggle}/>
            <div>
            {hidden && <FaCircle className='colourCircle' id='yellowCircle' onClick={SetYellow}/>}
            {hidden && <FaCircle className='colourCircle' id='redCircle' onClick={SetRed}/>}
            {hidden && <FaCircle className='colourCircle' id='blueCircle' onClick={SetBlue}/>}
            </div>
        </div>
        
        
    )

    
}