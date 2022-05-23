import { createContext, useContext, useState } from "react";
import { OUR_PROFILE } from "../helpers/constants";

const OurProfileContext = createContext(null)

const [OURMESSAGES] = OUR_PROFILE

const OurProfileProvider = ({children}) => {
    const [ourProfileRoute, setOurProfileRoute] = useState(OURMESSAGES)
    

    return (
        <OurProfileContext.Provider value={{ourProfileRoute, setOurProfileRoute}}>
            {children}
        </OurProfileContext.Provider>
    )
}

export const useOurMessages = () => useContext(OurProfileContext)

export default OurProfileProvider