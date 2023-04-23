import { createContext, useState } from 'react';

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [bgColor, setBgColor] = useState('');

    return(
        <AppContext.Provider value={{bgColor, setBgColor}}>
            {children}
        </AppContext.Provider>
    )
}

