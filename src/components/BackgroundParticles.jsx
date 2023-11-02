import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useContext } from "react";
import { ColourContext } from "../contexts/ColourContext";


export default function BackgroundParticles() {

  const {colour} = useContext(ColourContext)

  const particleColour = colour

  let particleConfig = {
    "fullScreen": {
        "enable": true,
        "zIndex": -1
    },
    "particles": {
        "number": {
            "value": 110,
            "density": {
                "enable": false,
                "value_area": 800
            }
        },
        "color": {
            "value": particleColour
        },
        "shape": {
            "type": "circle",
        },
        "opacity": {
            "value": 0.8,
        },
        "size": {
            "value": 2,
            "random": false,
        },
        "rotate": {
            "value": 0,
            "random": true,
            "direction": "clockwise",
            "animation": {
                "enable": true,
                "speed": 5,
                "sync": false
            }
        },
        "move": {
            "enable": true,
            "speed": 2,
        },
        "wobble": {
          "enable": true,
          "distance": 1
        }
    },
    "retina_detect": true,
    "background": {
        "color": "#111",
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover"
    }
}

    async function loadParticles(main) {
        await loadFull(main)
      }
      
      return (
        <Particles id="tsparticles" init={loadParticles} options={particleConfig}/>
      )
}