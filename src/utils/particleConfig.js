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
            "value": "#FFFF00"
        },
        "shape": {
            "type": "circle",
        },
        "opacity": {
            "value": 0.8,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 2,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 50,
                "size_min": 0.1,
                "sync": false
            }
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

export default particleConfig