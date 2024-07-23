import { createContext } from "react";

export const storeContext = createContext();


// Create a provider component
export const StoreProvider = ({ children }) => {
     

    return (
        <storeContext.Provider value={{ }}>
            {children}
        </storeContext.Provider>
    );
};
