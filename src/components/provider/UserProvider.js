import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext({
    target: null,
    setTarget: () => {},
});

const UserProvider = ({ children }) => {
    
    const [target, setTarget] = useState(null);

    return (
        <UserContext.Provider value={{ 
            target,
            setTarget,
        }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;