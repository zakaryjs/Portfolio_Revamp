import { useContext } from 'react';
import '../styles/ColourChange.css'
import { FaCircle } from 'react-icons/fa';
import { ColourContext } from '../contexts/ColourContext';


export default function ColourChange() {

    const {setColour} = useContext(ColourContext)

    const {hidden} = useContext(ColourContext)
    const {setHidden} = useContext(ColourContext)

    function debugSetRed() {
        setColour("#ff0000")
    }

    function debugSetBlue() {
        setColour("#00FFFF")
    }

    function debugSetYellow() {
        setColour("#f5e218")
    }


    return (
        <div>
            {hidden && <FaCircle className='colourCircle' id='yellowCircle' onClick={debugSetYellow}/>}
            {hidden && <FaCircle className='colourCircle' id='redCircle' onClick={debugSetRed}/>}
            {hidden && <FaCircle className='colourCircle' id='blueCircle' onClick={debugSetBlue}/>}
        </div>
    )
}