import { createContext, useState } from "react";

export const ColourContext = createContext(null);

export default function ColourProvider ({children}) {

    const [colour, setColour] = useState("#f5e218")

    return (
        <ColourContext.Provider value={
            {
                colour: colour,
                setColour: setColour
            }
        }>
            {children}
        </ColourContext.Provider>
    )
}