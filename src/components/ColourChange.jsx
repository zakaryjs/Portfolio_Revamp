import { useContext } from 'react';
import '../styles/ColourChange.css'
import { FaCircle } from 'react-icons/fa';
import { ColourContext } from '../contexts/ColourContext';


export default function ColourChange() {

    const {setColour} = useContext(ColourContext)

    const {hidden} = useContext(ColourContext)

    function SetRed() {
        setColour("#ff0000")
    }

    function SetBlue() {
        setColour("#00FFFF")
    }

    function SetYellow() {
        setColour("#f5e218")
    }


    return (
        <div>
            {hidden && <FaCircle className='colourCircle' id='yellowCircle' onClick={SetYellow}/>}
            {hidden && <FaCircle className='colourCircle' id='redCircle' onClick={SetRed}/>}
            {hidden && <FaCircle className='colourCircle' id='blueCircle' onClick={SetBlue}/>}
        </div>
    )
}